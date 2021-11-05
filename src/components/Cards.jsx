import React, { Component } from 'react'
import {Card, Button } from 'react-bootstrap'

export default class Cards extends Component {
    render() {
        let { superhero, publisher, image} = this.props.heros
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{superhero}</Card.Title>
                        <Card.Text>
                            {publisher}
                        </Card.Text>
                        <Button variant="primary">This is a button</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
