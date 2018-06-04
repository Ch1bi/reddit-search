import React, {Component} from 'react'
import Searchbar from './Searchbar'
import {Posts} from './Posts'


class Home extends Component{

    constructor(props){

        super(props)
    }


    render(){


        return(

            <div className="container">

            <Searchbar />
            <Posts />
            </div>
        )
    }

}

export default Home
