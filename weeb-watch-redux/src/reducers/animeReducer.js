import { FETCH_DATA, UPDATE_ANIME_LIST } from "../actions"

const initialState = {
    anime: [],
    isFetching: false
}

export const animeReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}