import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button.attrs(
  props => ({
    size: props.size || 'md'
  })
)`
  background-color: ${(props) => (props.dark ? props.dark : 'red')};
  color: white;
  border: none;
  cursor: pointer;

  &.rounded {
    border-radius: 20px;
  }
  
  &:hover{
    color: black
  }

  ${
    props => props.size === 'sm' ? `
      width: 200px;
    ` : props.size === 'md' ? `
      width: 400px;
    ` : props.size === 'lg' ? `
      width: 600px;
    `
    :
    null
  }
`

const SecondButton = styled(Button)`
  background-color: tomato
`


export const SignIn = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }
    
  return (
    <div style={{
        padding: '20px',
    }}>
        <h1>Sigin</h1>
        <h2>{state.data}</h2>
        <Link to={'/'} style={{ padding: '8px 30px', backgroundColor: '#22d0278c', borderRadius: '10px' }}>Home</Link>
        <button onClick={handleBack}>Bosh sahifaga qayt</button>
        <Button size={'sm'} className='rounded'>Styled Component</Button>
        <Button>Medium</Button>
        <Button dark={'green'} size={'lg'}>Styled Component2</Button>
        <SecondButton dark={'black'} size={'sm'} className='rounded'>Second Button</SecondButton>
    </div>
  )
}
