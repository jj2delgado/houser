import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component{
    constructor(){
        super()

        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleStateChnage = this.handleStateChnage.bind(this)
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
        this.addHouse = this.addHouse.bind(this)
    }
    handleNameChange(e){
        this.setState({name: e.target.value})
    }
    handleAddressChange(val){
        this.setState({address: val})
    }
    handleCityChange(val){
        this.setState({city: val})
    }
    handleStateChnage(e){
        this.setState({state: e.target.value})
    }
    handleZipcodeChange(e){
        this.setState({zip: e.target.value})
        console.log(this.state.zip)
    }
    addHouse(){
        axios.post('/api/houses', 
            {name: this.state.name, 
            address: this.state.address, 
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }).then(res => res.status(200))
        this.props.history.push('/')
    }

    render(){
        return(
            
            <div>
                Wizard
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <input placeholder='Name' onChange={this.handleNameChange}></input>
                <input placeholder='Address' onChange = {e => this.handleAddressChange(e.target.value)}></input>
                <input placeholder='City' onChange={e => this.handleCityChange(e.target.value)}></input>
                <input placeholder='State' onChange={this.handleStateChnage}></input>
                <input placeholder='Zipcode' onChange={this.handleZipcodeChange}></input>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}