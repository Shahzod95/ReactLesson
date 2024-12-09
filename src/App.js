import React  from 'react'
import {Routes, Route} from "react-router-dom"
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'


const App = (props) => {

  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  )
}

export default App