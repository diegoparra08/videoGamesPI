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
    const dispatch = useDispatch(); //Permite hacer el dispatch de las peticiones desde acá
    const allGames = useSelector((state) => state.allGames); //Esto permite suscribir este componente al estado de allGames
    const allGenres = useSelector((state) => state.genres);
    const filteredGames = useSelector((state) => state.filteredGames);
    const [search, setSearch] = useState(""); //se setea el estado del input
    const [page, setPage] = useState(1);
    const [loadingTime, setLoadingTime] = useState(true);


    const cardsByPage = 15;
    const maximum = allGames.length / cardsByPage;
    const start = (page - 1) * cardsByPage;
    const end = (page - 1) * cardsByPage + cardsByPage;

    const allGamesWithPagination = allGames.slice(start, end);
    


    function handleChange(event) { //recibe lo que se pone en el input y se lo asigna al estado search
        event.preventDefault();
        setSearch(event.target.value)
    };

    function handleSubmit(event) { //despacha la funcion de searchByname con el string que viene delestado search
        event.preventDefault();

        if (search === "") {
            alert("Must provide a name to search")
        } else {
            dispatch(searchByName(search))
        }
    };

    useEffect(() => { //useEffect controla el ciclo de vida del componente
        dispatch(loadGames()); //usa el dispatch para hacer el mount de todos los juegos
        dispatch(loadGenres()); // carga los generos cuando se va a home.

        const timer = setTimeout(() => {
            setLoadingTime(false); // Mostrar resultados después de 2 segundos

        }, 2000); // 2 segundos en milisegundos

        return () => clearTimeout(timer);

    }, [dispatch]);

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />

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

                        <OriginButton />
                        <div>
                            <ByGenreBannerH4>By Genre</ByGenreBannerH4>
                            <GenrePanel allGenres={allGenres} page={page} setPage={setPage}/>
                        </div>

                    </SidePanel>

                    <CardContainer>

                        <Cards allGames={allGamesWithPagination} />

                    </CardContainer>


                </HomeContainerDiv>}
        </div>
    );
};

export default Home;