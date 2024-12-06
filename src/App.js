import React, { Component, useEffect, useState } from 'react'

// export class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//       isActive: false
//     }
//   }

//   render(){
//     return(
//       <div>
//         <h1>App</h1>
//       </div>
//     )
//   }
// }

const App = (props) => {
  // useState 
  const [count, setCount] = useState(100)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if(isActive){
      console.log("BU EFFECT")
    }
    return () => {
      console.log("Bu UnMount")
    }
  },[isActive])

  const handleQushish = () => {
    setCount(prev => prev + 1)
  }

  const handleUzgartir = () => {
    setIsActive((prev) => !prev)
  }

  
  return (
    <div>
      <h1>
        {count} {isActive ? "True" : "False"}
      </h1>
      <button onClick={handleQushish}>Qo'shish</button>
      <button onClick={handleUzgartir}>O'zgartir</button>
    </div>
  )
}

export default App