import React, {Component} from 'react'
import './House.css'

export default class House extends Component{
    render(){
        console.log(this.props)
        return(
            <div className = "House-Container">
                <p className='houseName'>Property Name: {this.props.house.name}</p>
                <p className='houseAddress'> Address: {this.props.house.address}</p>
                <p className='houseCity'>City: {this.props.house.city}</p>
                <p className='houseState'>State: {this.props.house.state}</p>
                <p className='houseZip'>Zip: {this.props.house.zip}</p>
                <button onClick={ () => this.props.deleteHouse(this.props.house.id)}>Delete</button>
            </div>
        )
    }
}