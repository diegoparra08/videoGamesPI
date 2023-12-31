import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, loadGenres, searchByName, filterByOrigin, filterByGenre } from '../../Redux/actions';

import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';
import GenrePanel from '../../Components/FilterPanels/GenrePanel';
import OriginButton from '../../Components/FilterButtons/OriginButton';
import OrderComponent from '../../Components/Order/Order';
import ResetButton from '../../Components/FilterButtons/ResetButton';
import Pagination from '../../Components/Pagination/Pagination';

import { CardContainer, ContentContainer, PaginationDiv, SidePanel, LoadingContainer, ByGenreBannerH4, LoadingText, HomeContainerDiv, LoadingBar, LoadingBarFill } from './Home.styles';
import { NoResultsBanerP, NoResultContainer } from '../../Components/Cards/Cards.styles'

function Home() {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames);
    const allGenres = useSelector((state) => state.genres);
    const filters = useSelector((state) => state.filters);

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
            dispatch(searchByName(search, setSearchResultsFound));
            setSearch("");
            setPage(1);
        }

    };


    useEffect(() => {

        dispatch(loadGenres());

        if (filters.length > 0) {
            let filterValue = filters[0];

            if (filterValue === 'Api' || filterValue === 'Data Base') {
                dispatch(filterByOrigin(filterValue));
            } else {
                dispatch(filterByGenre(filterValue));
            }
        } else {
            dispatch(loadGames());
        }

        const timer = setTimeout(() => {
            setLoadingTime(false);
        }, 2000);

        setSearchResultsFound(true);

        return () => clearTimeout(timer);

    }, [dispatch]);

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} search={search} />

            {loadingTime ?

                <LoadingContainer>
                    <LoadingText>Loading</LoadingText>

                    <LoadingBar>
                        <LoadingBarFill />
                    </LoadingBar>
                </LoadingContainer> : <HomeContainerDiv>

                    <ContentContainer>

                        <OrderComponent />
                        <ResetButton />

                    </ContentContainer>

                    <SidePanel>

                        <OriginButton setSearchResultsFound={setSearchResultsFound} />
                        <div>
                            <ByGenreBannerH4>By Genre</ByGenreBannerH4>
                            <GenrePanel allGenres={allGenres} setPage={setPage} setSearchResultsFound={setSearchResultsFound} />

                        </div>
                        <PaginationDiv>
                            <Pagination page={page} setPage={setPage} maximum={Math.ceil(maximum)} />
                        </PaginationDiv>

                    </SidePanel>
                    <CardContainer>
                        {searchResultsFound ? (
                            <Cards allGames={allGamesWithPagination} />
                        ) : (
                            <NoResultContainer>
                                <NoResultsBanerP>
                                    No results Sorry! Try a different search.
                                </NoResultsBanerP>
                            </NoResultContainer>
                        )}
                    </CardContainer>

                </HomeContainerDiv>}
        </div>
    );
};

export default Home;