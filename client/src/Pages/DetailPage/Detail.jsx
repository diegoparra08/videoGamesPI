import { useParams } from "react-router-dom"; //permite recibir el 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from '../../Redux/actions';

import { DetailImg } from "./Detail.styles";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detailedGame = useSelector((state) => state.gameDetail)

    useEffect(() => { //useEffect controla el ciclo de vida del componente
        dispatch(getDetail(id))//usa el dispatch para hacer el mount de todos los juegos
        return () => dispatch(clearDetail())
    }, [id, dispatch]);

    return (
        <div>
            <h2>Here is more on this Game...</h2>
            <DetailImg src={detailedGame.image && detailedGame.image} alt={detailedGame.name} />
            <h2>{detailedGame.name}</h2>
            <h4>Game ID: {detailedGame.id}</h4>
            <ul>
                {detailedGame.genres && detailedGame.genres.length > 0 ? (
                    <li>
                       <strong>Genres: </strong> {detailedGame.genres.map(genre => genre.name).join(', ')}
                    </li>
                ) : (
                    <li>Genres: Not defined</li>
                )}
            </ul>

            <ul>
                {detailedGame.platforms && detailedGame.platforms.length > 0 ? (
                    <li>
                        <strong>Platforms:</strong> {detailedGame.platforms.map(platform => platform.name).join(', ')}
                    </li>
                ) : (
                    <li>Platforms: Not defined</li>
                )}
            </ul>
            <h4>Rating: {detailedGame?.rating}</h4>
            <h4>Released on: {detailedGame?.released}</h4>
            <p>{detailedGame?.description}</p>


        </div>
    )
};

export default Detail;
