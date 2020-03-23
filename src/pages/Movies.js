import React, { Component } from 'react';

export default class Movies extends Component {
    constructor(props){
        super(props)
        // display params
        console.log( this.props )
        console.log( this.props.match.params )

        if (Object.keys(this.props.match.params).length === 0 && this.props.match.params.constructor === Object){
            console.log("empty")
        }

        this.movieList = [
            "King Kong",
            "Gone With The Wind",
            "Avengers"
        ]

    }


    render(){
        return(
            <div>
                Movies
            
            </div>
            )
    }
} 