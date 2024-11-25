import { Component } from "react";
import Bola from "./Bola";
// import { Main as Asosiy } from "./pages/Main"

// Reactda komponentlar 2 xil bo'ladi 

// Class component 

// Function component 

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggle: false
    }
    console.log("App constructor")
}

  async componentDidMount(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json() 
    console.log("App mounted... ", users)
  }

  componentDidUpdate(a, b){
    console.log("App a = ", a, " APP b = ", b)
  }

  handleToggle = () => {
    this.setState((prev) => ({
      ...prev,
      toggle: !prev.toggle
    }))
  }
  render(){
    console.log("APP component")
    return (
      <div>
        <button onClick={this.handleToggle}>Toogle</button>
        {
          this.state.toggle && (
            <Bola title="Bola props" toggle={this.state.toggle} />
          )

        }
      </div>
    );

  }
}

export default App;
