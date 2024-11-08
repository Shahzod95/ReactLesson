import React, { Component } from 'react'

// State -> O'zgaruvchilar

export default class Second extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
        this.state = {
            year: 2007,
            count: 0,
            active: false
        }
    }

    handleClick = () => {
        this.setState(prev => ({
            count: prev.count + 1
        }))
        // this.setState({count: this.state.count + 1})
    }

    handleActive = () => {
        // this.setState({active: !this.state.active})
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

  render() {
    console.log("STATE ", this.state.count)
    const {title, yoshi} = this.props
    return (
        <>
            {/* <div>Ismi : {title}</div>
            <div>Yoshi : {yoshi}</div>
            <div>Yili : {this.state.year}</div> */}
            <div>COUNT : {this.state.count}</div>
            <button onClick={this.handleClick}>Increment</button>
            <button onClick={this.handleActive()}>{this.state.active ? 'Active' : 'Inactive'}</button>
        </>
    )
  }
}
