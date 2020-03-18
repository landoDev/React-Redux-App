import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/index'
import styled from 'styled-components';

const FetchDiv= styled.div`
    background-color: #000000;
    margin: 2%;
    font-size: 2rem;
    font-family: 'Shojumaru' ;
    color: #ffffff;
    border: 3px solid  #FFD7C1;
    padding: .5%;
`;

const Button = styled.button`
    background-color: #000000;
    margin: 2%;
    font-size: 2rem;
    font-family: 'Shojumaru' ;
    color: #ffffff;
    border: 3px solid  #FFD7C1;
    padding: .5%;
`;


const AnimeForm = props =>{
    // console.log('AnimeForm Props', props)
    const handleGetData = e =>{
        e.preventDefault();
        props.getData()

    }
    return(
        <>
        {props.isFetching ? <FetchDiv>...Powering up the top Anime...</FetchDiv> : <Button onClick={handleGetData}>Get in the Robot</Button>} 
        </>
    );
};

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, { getData })(AnimeForm);
