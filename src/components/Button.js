import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

  render() {
    const {red, children} = this.props
    console.log("Children ", children)
    return (
      <button style={{color : red}}>
        { children }
      </button>
    )
  }
}
