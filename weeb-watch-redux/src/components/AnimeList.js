import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ListDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
`;

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F85B1A;
    border: 5px solid  #072083;
    width: 19%;
    margin: 0 auto;
    margin-top: 2%;
    padding: 1%;
    h1, h2, p, a{
        color:  #072083;
        font-family: 'Shojumaru' ;
        text-shadow: 2px 2px #8A9294;
    img {
        margin: 0 auto;
        margin-bottom: 2%;
        border: 5px solid  #2a504b;
    }
    link{
        text-decoration: none;
        padding: 2%;
    }
`;

const Error = styled.div`
    background-color: #000000;
    margin: 0 auto;
    margin-top: 2%;
    width: 75%
    font-size: 8rem;
    font-family: 'Shojumaru' ;
    color: #ffffff;
    border: 3px solid  #FFD7C1;
    padding: 2%;
`;

const AnimeList = props => {
    console.log('ANIME LIST PROPS', props)
    return(
        
        <ListDiv>
            {props.error ? (<Error>{props.error}</Error>) : props.anime.map(anime=>{
                return(
                    <CardDiv key={anime.mal_id}>
                        <h2 className="title">{anime.title}</h2>
                        <p>Rank {anime.rank}</p>
                        <p className="episodes">Episodes: {anime.episodes}</p>
                        <img src={anime.image_url} alt="anime cover"></img>
                        <a className="link" href={anime.url}>Full Details Here</a>
                    </CardDiv>
                )
            })}
        </ListDiv>
    )
}

const mapPropsToState = state =>{
    return{
        anime: state.anime,
        error: state.error
    }
}

export default connect(mapPropsToState, {})(AnimeList)
