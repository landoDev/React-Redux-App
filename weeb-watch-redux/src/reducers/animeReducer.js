import { FETCH_DATA } from "../actions"

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
        default:
            return state;
    }
}