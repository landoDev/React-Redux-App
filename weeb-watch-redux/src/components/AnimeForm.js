import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions/index'
import styled from 'styled-components';

const AnimeForm = props =>{
    console.log('AnimeForm Props', props)
    const handleGetData = e =>{
        e.preventDefault();
        props.getData()
        
    }
    return(
        <>
        {props.isFetching ? <div>...Powering up the top Anime...</div> : <button onClick={handleGetData}>Get in the Robot</button>} 
        </>
    );
};

const mapPropsToState = state =>{
    return{
        isFetching: state.isFetching
    };
};

export default connect(mapPropsToState, { getData })(AnimeForm);
