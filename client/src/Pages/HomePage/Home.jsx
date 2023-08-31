import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, loadGenres, searchByName } from '../../Redux/actions';

import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';
import GenrePanel from '../../Components/FilterPanels/GenrePanel';
import OriginButton from '../../Components/FilterButtons/OriginButton';
import OrderComponent from '../../Components/Order/Order';
import ResetButton from '../../Components/FilterButtons/ResetButton';
import Pagination from '../../Components/Pagination/Pagination';

import { CardContainer, ContentContainer, SidePanel, LoadingContainer, ByGenreBannerH4, LoadingText, HomeContainerDiv, LoadingBar, LoadingBarFill } from './Home.styles';


function Home() {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames);
    const allGenres = useSelector((state) => state.genres);

    const [search, setSearch] = useState("");
    const [searchResultsFound, setSearchResultsFound] = useState(true);

    const [page, setPage] = useState(1);
    const [loadingTime, setLoadingTime] = useState(true);


    const cardsByPage = 15;
    const maximum = allGames.length / cardsByPage;
    const start = (page - 1) * cardsByPage;
    const end = (page - 1) * cardsByPage + cardsByPage;

    const allGamesWithPagination = allGames.slice(start, end);



    function handleChange(event) {
        event.preventDefault();
        setSearch(event.target.value)
    };

    function handleSubmit(event) {
        event.preventDefault();

        if (search === "") {
            alert("Must provide a name to search")
        } else {
            // dispatch(searchByName(search)
            dispatch(searchByName(search, setSearchResultsFound))
            setSearch("")
        }
        
    };

    useEffect(() => {
        dispatch(loadGames());
        dispatch(loadGenres());

        const timer = setTimeout(() => {
            setLoadingTime(false);

        }, 2000);

        setSearchResultsFound(true);

        return () => clearTimeout(timer);

    }, [dispatch]);

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} search={search}/>

            {loadingTime ?

                <LoadingContainer>
                    <LoadingText>Loading</LoadingText>

                    <LoadingBar>
                        <LoadingBarFill />
                    </LoadingBar>
                </LoadingContainer> : <HomeContainerDiv>

                    <ContentContainer>

                        <Pagination page={page} setPage={setPage} maximum={Math.ceil(maximum)} />
                        <OrderComponent />
                        <ResetButton />

                    </ContentContainer>

                    <SidePanel>

                        <OriginButton setSearchResultsFound={setSearchResultsFound}/>
                        <div>
                            <ByGenreBannerH4>By Genre</ByGenreBannerH4>
                            <GenrePanel allGenres={allGenres} page={page} setPage={setPage} setSearchResultsFound={setSearchResultsFound}/>
                        </div>

                    </SidePanel>
                    <CardContainer>
                        {searchResultsFound ? (
                            <Cards allGames={allGamesWithPagination} />
                        ) : (
                            <div>No se encontraron resultados</div>
                        )}
                    </CardContainer>

                    {/* <CardContainer>

                        <Cards allGames={allGamesWithPagination} />

                    </CardContainer> */}


                </HomeContainerDiv>}
        </div>
    );
};

export default Home;