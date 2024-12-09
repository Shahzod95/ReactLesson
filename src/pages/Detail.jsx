import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Detail = () => {

    const { state } = useLocation()

    console.log("DATA ", state)
  return (
    <div style={{
        padding: '40px'
    }}>
        <div>
            <Link to={'/'}>Bosh sahifaga</Link>
        </div>
        <h1>Ismi: {state.user.name}</h1>
        <h3>
            Telefon raqami: {state.user.phone}
        </h3>
        <p>Shahri: {state.user.address.city}</p>
    </div>
  )
}
