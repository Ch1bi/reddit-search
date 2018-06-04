import React, {Component} from 'react';
import {dispatchSubreddit} from '../actions/subreddit-actions'
import { connect } from 'react-redux'


class Searchbar extends Component{

    constructor(props){

        super(props)

        this.state = {

            input:''
        }
    }

    handleChange = (e) =>{

        this.setState({input:e.target.value.toLowerCase()})
    }

    doRequest = (e) =>{

        e.preventDefault()
        this.props.getReddit(this.state.input)

    }



    render(){


        return(


        <form>
                
            <input type="text" 
            name="search"
            value={this.state.input}
            onChange={this.handleChange}
            />

            <input type="submit" 
            value="submit"
            onClick={this.doRequest}
            />

        </form>

        )
    }

}



function mapDispatchToProps(dispatch){

    return{

        getReddit:(name) => dispatch(dispatchSubreddit(name))
 
     }

}


export default connect(null, mapDispatchToProps)(Searchbar)