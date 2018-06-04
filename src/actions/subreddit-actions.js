import axios from 'axios'
import {GET_SUBREDDIT, LIKE_POST, GET_SAVED_POSTS, SUBREDDIT_SUCCESS, SUBREDDIT_FAILURE} from '../actions/types'


const BASE_URL = 'https://www.reddit.com/r/'


export function dispatchSubreddit(name){

    return (dispatch) =>{
        console.log(name)
        dispatch({type:'GET_SUBREDDIT'})
        
        return axios.get(`${BASE_URL}${name}.json`)
        
        .then((response)=>{
          dispatch({type:'SUBREDDIT_SUCCESS', payload: response.data.data.children})
          

        })
        .catch((err)=>{

            dispatch({type:'SUBREDDIT_FAILURE', payload:err})
        })

    }
    
}
