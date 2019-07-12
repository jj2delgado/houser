import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import House from '../House/House'
import './Dashboard.css'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount(){
        axios.get('/api/houses').then( res => {
            this.setState({houses: res.data})
            console.log(res.data)
        }).catch(err => {
            console.log('error from server', err)
        })
        this.props.history.push('/')
    
    }
    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(res => 
            this.componentDidMount())
    }
    render(){
        console.log(this.state.houses)
        return(
            <div className="Dashboard-Container">
                <h1>Dashboard</h1>

                <Link to='/wizard'>
                <button>Add New Property</button>
                </Link>
                
                <div>
                     {this.state.houses.map(house => {
                    return <House key={house.id}
                    house={house}
                    deleteHouse={this.deleteHouse}
                    />
                })}
                </div>
            </div>
        )
    }
}