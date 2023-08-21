import { useParams } from "react-router-dom"; //permite recibir el 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../Redux/actions';


function Detail(){

 const { id } = useParams();
const dispatch = useDispatch();
const detailedGame = useSelector((state) => state.gameDetail)

 useEffect(() => { //useEffect controla el ciclo de vida del componente
    dispatch(getDetail(id)) //usa el dispatch para hacer el mount de todos los juegos
}, [dispatch]);

 return(
    <div>
       {`detail del juego ${id}`}
       <h2>{detailedGame.name}</h2>
    </div>
 )
};

export default Detail;