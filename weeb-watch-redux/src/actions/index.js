import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_ANIME_LIST = 'UPDATE_ANIME_LIST'

export const getData = () => dispatch =>{
    dispatch({type: FETCH_DATA});
    axios.get('https://api.jikan.moe/v3/top/anime')
    .then(res=>{
        console.log(res)
        dispatch({type: UPDATE_ANIME_LIST, payload: res.data.top})
    })
    .catch(err=> console.log('NANI?!', err))
    
}