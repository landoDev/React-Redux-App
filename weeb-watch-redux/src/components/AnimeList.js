import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F85B1A;
    border: 5px solid  #072083;
    margin: 0 auto;
    margin-top: 5%;
    padding:1%
    h1, h2, p, a{
        color:  #072083;
        font-family: 'Shojumaru' ;
        text-shadow: 2px 2px #8A9294;
    img {
        margin: 0 auto;
        border: 5px solid  #2a504b;
    }
    link{
        text-decoration: none;
        padding: 2%
    }
`;

const AnimeList = props => {
    console.log('ANIME LIST PROPS', props)
    return(
        <>
            {props.anime.map(anime=>{
                return(
                    <CardDiv>
                        <h2 className="title">Title: {anime.title}</h2>
                        <p className="episodes">Episodes: {anime.episodes}</p>
                        <img src={anime.image_url} alt="anime cover"></img>
                        <a className="link" href={anime.url}>Full Details Here</a>
                    </CardDiv>
                )
            })}
        </>
    )
}

const mapPropsToState = state =>{
    return{
        anime: state.anime
    }
}

export default connect(mapPropsToState, {})(AnimeList)
