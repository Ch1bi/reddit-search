import axios from 'axios'
import {GET_SUBREDDIT, LIKE_POST, GET_SAVED_POSTS, SUBREDDIT_SUCCESS, SUBREDDIT_FAILURE} from './types'

const BASE_URL = 'https://www.reddit.com/r/'

export function getSubreddit(name){

    return axios.get(`${BASE_URL}${name}top/.json`)
    .then(response =>{

        console.log(response)
        dispatchEvent({type:SUBREDDIT_SUCCESS, payload:response})
    })
}