import React, { Component } from 'react'
import HeroList from '../components/HeroList'

export default class Container extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Container</h1>
                <HeroList/>
            </div>
        )
    }
}