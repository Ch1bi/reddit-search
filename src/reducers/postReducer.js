import { GET_SUBREDDIT, SUBREDDIT_SUCCESS, SUBREDDIT_FAILURE } from '../actions/types'

const initialState = {
	subReddit: '', 
	data:[], 
	error: false,
	fetching: true
}

export default function subRedditReducer(state = initialState, action){

    switch(action.type){

        case 'GET_SUBREDDIT':
				console.log(action)
		return {
            ...state,
            isFetching:true,
            data: []
        }

        case 'SUBREDDIT_SUCCESS':
            console.log(action)
            
            return{
                ...state,
                isFetching:false,
                error:false,
                data:action.payload.concat(state.data)
                
            }
            

            case 'SUBREDDIT_FAILURE':
            console.log(action)
            return{
                ...state,
                isFetching:false,
                error:true
            }

            default:
            return state
}

}