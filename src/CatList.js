import React, { Component } from 'react';

export default class CatList extends Component {
    
    showCats() {
        
        if (this.props.catPics){
           return this.props.catPics.map(pic => <img src={pic.url}/>)
        }
    }
    
    render () {
        return (
        <div> {this.showCats()} </div>
        )
    }
}