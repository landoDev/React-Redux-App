import { FETCH_DATA, UPDATE_ANIME_LIST, SET_ERROR } from "../actions"

const initialState = {
    anime: [],
    isFetching: false,
    error: ''
}

export const animeReducer = (state = initialState, action) => {
    // console.log('ACTION TAKEN', action);
    // console.log('PAYLOAD', action.payload)
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true
            }
        case UPDATE_ANIME_LIST:
            return{
                ...state,
                anime: action.payload,
                isFetching: false
            }
        case SET_ERROR:
        return {
            ...state,
            isFetchingData: false,
            error: action.payload
        };
        default:
            return state;
    }
}