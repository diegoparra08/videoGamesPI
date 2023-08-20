import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../../Redux/actions';

import Cards from '../../Components/Cards/Cards'

function Home() {
    const dispatch = useDispatch(); //Permite hacer el dispatch de las peticiones desde acá
    const allGames = useSelector((state) => state.allGames); //Esto permite suscribir este componente al estado de allGames

    useEffect(() => { //useEffect controla el ciclo de vida del componente
      dispatch(loadGames()) //usa el dispatch para hacer el mount de 
    }, [dispatch]);

    return (
        <div>
            <Cards allGames={allGames}/>
        </div>
    )
};

export default Home;