import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, loadGenres, searchByName } from '../../Redux/actions';

import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';
import GenrePanel from '../../Components/FilterPanels/GenrePanel';
import OriginButton from '../../Components/FilterButtons/OriginButton';


function Home() {
    const dispatch = useDispatch(); //Permite hacer el dispatch de las peticiones desde acá
    const allGames = useSelector((state) => state.allGames); //Esto permite suscribir este componente al estado de allGames
    const allGenres = useSelector((state) => state.genres);
    const [search, setSearch] = useState(""); //se setea el estado del input

    function handleChange(event) { //
        event.preventDefault();
        setSearch(event.target.value)
    };

    function handleSubmit(event) {
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
    }, [dispatch]);

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
            <GenrePanel allGenres={allGenres} />
            <OriginButton />
            <Cards allGames={allGames} />
        </div>
    );
};

export default Home;

