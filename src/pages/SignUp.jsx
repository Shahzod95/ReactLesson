import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div style={{
        padding: '20px',
    }}>
        <h1>
            SigUp
        </h1>
        <Link to={'/'} style={{ padding: '8px 30px', backgroundColor: '#22d0278c', borderRadius: '10px' }}>Home</Link>
    </div>
  )
}
