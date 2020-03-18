import React from 'react';
import styled from 'styled-components'

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #13366c;
    border: 5px solid  #2a504b;
    margin: 0 auto;
    margin-top: 5%;
    padding:1%
    max-width: 50%;
    h1, h2, p, a{
        color: #298acd;
        font-family: 'Shojumaru' ;
        text-shadow: 2px 2px black;
    img {
        margin: 0 auto;
        border: 5px solid  #2a504b;
    }
    link{
        text-decoration: none;
        padding: 2%
    }
`;

const AnimeCard = props =>{
    return(
        <CardDiv>
            <h2 className="title">Title: {props.title}</h2>
            <p className="episodes">Episodes: {props.episodes}</p>
            <img src={props.image_url} alt="anime cover"></img>
            <a className="link" href={props.url}>Full Details Here</a>
        </CardDiv>
    )
}