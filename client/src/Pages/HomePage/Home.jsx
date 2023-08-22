import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames, loadGenres, searchByName } from '../../Redux/actions';

import NavBar from '../../Components/NavBar/NavBar';
import Cards from '../../Components/Cards/Cards';
import GenrePanel from '../../Components/FilterPanels/GenrePanel';
import OriginButton from '../../Components/FilterButtons/OriginButton';
import OrderComponent from '../../Components/Order/Order';
import ResetButton from '../../Components/FilterButtons/ResetButton';


function Home() {
    const dispatch = useDispatch(); //Permite hacer el dispatch de las peticiones desde acá
    const allGames = useSelector((state) => state.allGames); //Esto permite suscribir este componente al estado de allGames
    const allGenres = useSelector((state) => state.genres);
    const [search, setSearch] = useState(""); //se setea el estado del input

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
    }, [dispatch]);

    return (
        <div>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit} /> 
            {/* recibe las funciones handle para enviarlas a la navbar y que se ejecute la busqueda */}
            <OrderComponent />
            <OriginButton />
            <ResetButton/>
            <GenrePanel allGenres={allGenres} />  
            {/* envia la info de genres a genrePanel para que se rendericen todos los botones */}
            <Cards allGames={allGames} /> 
            {/* envia la informacion del estado global de allGames a Cards */}
        </div>
    );
};

export default Home;

