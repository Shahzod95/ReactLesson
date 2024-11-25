import React, { Component } from 'react'

export default class Bola extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            name: ''
        }
        console.log("Bola constructor")
    }

    componentDidMount(){
        console.log("Bola mounted")
    }

    componentDidUpdate(prevProps, state){
        // if (state.counter !== this.state.counter){
        //     console.log("Props = ", prevProps, " State = ", state)
        //     this.setState((prev) => ({
        //         ...prev,
        //         name: 'Rayhona'
        //     }))
        // }


        if(prevProps.toggle !== this.props.toggle){
            console.log("ESKI PROPS ", prevProps.toggle)
            console.log("Yangi PROPS ", this.props.toggle)
            console.log("Props = ", prevProps, " State = ", state)
        }
      }

    componentWillUnmount(){
        console.log("Bola removed")
    }

    handleClick = () => {
        this.setState((prev) => ({
            ...prev,
            counter: prev.counter + 1
        }))
    }
  render() {
    console.log("Bola component")
    return (
        <div style={{
            padding: '100px',
            display: 'flex',
            gap: '20px'
        }}>
            <span>{this.state.counter}</span>
            <button onClick={this.handleClick}>+</button>
        </div>
      
    )
  }
}
