export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_ANIME_LIST = 'UPDATE_ANIME_LIST'

export const getData = () => dispatch =>{
    dispatch({type: FETCH_DATA});
}