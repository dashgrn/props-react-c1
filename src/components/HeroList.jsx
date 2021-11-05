import React, { Component } from 'react'
import Cards from './Cards'

export default class HeroList extends Component {

    constructor() {
        super();
        this.state = { //calls state and sets a key:value pair
            heros: [],
        }
    }

    async componentDidMount() {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
        let res = await fetch(url)
        let data = await res.json()
        let { results } = data
        this.setState({ heros: results }) //setter for STATE (sending key:value pair)
        console.log(this.state.heros)
    }
    render() {
        return (
            <div>
                {
                    this.state.heros.map((hero, index) => (
                        <Cards
                        key = {index}
                        heros = {hero} 
                        />
                    ))
                }
                
            </div>
        )
    }
}