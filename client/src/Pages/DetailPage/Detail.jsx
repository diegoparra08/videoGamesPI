import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from '../../Redux/actions';

import { DetailImg, DetailContainerDiv, DescriptionP, DetailTextUl, DetailLi, DetailTextH4, DetailTitleH2 } from "./Detail.styles";

function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const detailedGame = useSelector((state) => state.gameDetail)
    console.log(detailedGame);

    useEffect(() => { 
        dispatch(getDetail(id))

        return () => { dispatch(clearDetail())};

    }, [id, dispatch]);



    return (

        <DetailContainerDiv>

            <DetailImg src={detailedGame.image && detailedGame.image} alt={detailedGame.name} />
            <DetailTitleH2>{detailedGame.name}</DetailTitleH2>
            <DetailTextH4>Game ID:  {detailedGame.id}</DetailTextH4>
            <DetailTextUl>
                {detailedGame.genres && detailedGame.genres.length > 0 ? (
                    <DetailLi>
                        <strong>Genres: </strong> {detailedGame.genres.map(genre => genre.name).join(', ')}
                    </DetailLi>
                ) : (
                    <DetailLi>Genres: Not defined</DetailLi>
                )}
            </DetailTextUl>

            <DetailTextUl>
                {detailedGame.platforms && detailedGame.platforms.length > 0 ? (
                    <DetailLi>
                        <strong>Platforms:  </strong> {detailedGame.platforms.map(platform => platform.name).join(', ')}
                    </DetailLi>
                ) : (
                    <DetailLi>Platforms: Not defined</DetailLi>
                )}
            </DetailTextUl>
            <DetailTextH4>Rating:  {detailedGame?.rating}</DetailTextH4>
            <DetailTextH4>Released on:  {detailedGame?.released}</DetailTextH4>
            <DescriptionP>{detailedGame?.description}</DescriptionP>


        </DetailContainerDiv>
    )
};

export default Detail;
