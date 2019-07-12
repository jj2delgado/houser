import React, {Component} from 'react'
import './House.css'

export default class House extends Component{
    render(){
        console.log(this.props)
        return(
            <div className = "House-Container">
                <h1>{this.props.house.name}</h1>
                <h3>{this.props.house.address}</h3>
                <h3>{this.props.house.city}</h3>
                <h3>{this.props.house.state}</h3>
                <h3>{this.props.house.zip}</h3>
                <button>Delete</button>
            </div>
        )
    }
}