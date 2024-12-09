import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => {
        console.error(error)
      })

  }, [])

  const handleUser = (item) => {
      navigate(`/detail/${item.name}`, { state: { user: item }})
  }
  return (
    <div style={{
        padding: '20px',
    }}>
        <h1>Home Page</h1>

      <div>
        {
          users.map((item) => (
            <div 
              key={item.id} 
              style={{
                marginBottom: '10px',
                backgroundColor: '#39bf62',
                padding: '20px',
                borderRadius: '10px',
                cursor: 'pointer'
              }}
              onClick={() => handleUser(item)}
            >
                <h2>{item.name}</h2>
                <h4>{item.username}</h4>
            </div>  
          )) 
        }

      </div>

    </div>
  )
}
