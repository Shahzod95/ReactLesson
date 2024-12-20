import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';

export const Home = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();
  const [product, setProduct] = useState("")

  const {dispatch, state} = useContext(ProductContext)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => setUsers(json))
  //     .catch(error => {
  //       console.error(error)
  //     })

  // }, [])

  // const handleUser = (item) => {
  //     navigate(`/detail/${item.name}`, { state: { user: item }})
  // }

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setProduct(value)
  }

  const addProduct = (prod) => {
    dispatch({
      type: "QUSHISH",
      payload: {
        id: state?.products?.length + 1,
        title: prod
      }
    })
  }

  const deletePrudct = (pro) => {
    dispatch({
      type: "UCHIRISH",
      payload: pro
    })
  }

  return (
    <div style={{
        padding: '20px',
    }}>
        <h1>Home Page</h1>

        <div>
          <input name='product' value={product} onChange={handleChange}/>
          <button onClick={() => {
            addProduct(product)
            setProduct('')
          }}>Add Product</button>
        </div>

        <div style={{ marginTop: '20px' }}>
          {
            state.products.map((item) => (
              <div key={item.id} style={{ marginBottom : '10px', backgroundColor: 'rgba(0,255,0, 0.5)',  padding: '10px', borderRadius: '10px'}}>
                <h3 style={{
                  display: 'inline-block',
                  marginRight: '20px'
                }}>{item.title}</h3>
                <button onClick={() => deletePrudct(item)}>O'chirish</button>
              </div>
            ))
          }
        </div>

      <div>
        {/* {
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
        } */}

      </div>

    </div>
  )
}
