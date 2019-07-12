import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component{
    constructor(){
        super()

        this.state ={
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleStateChnage = this.handleStateChnage.bind(this)
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
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
        this.setState({zipcode: e.target.value})
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
                <button>Complete</button>
            </div>
        )
    }
}