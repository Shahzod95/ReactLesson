import React, { Component } from 'react'

// State -> O'zgaruvchilar

export default class Second extends Component {
    constructor(props){
        super(props)
        this.state = {
            year: 2007,
            count: 0,
            active: false,
            user: {
                ism: '',
                familiya: '',
                email: '',
                password: ''
            }
        }
    }

    // handleName = (e) => {
    //     const { name, value } = e.target

    //     this.setState((prev) => ({
    //         ...prev,
    //         user: {
    //             ...prev.user,
    //             ismi: value
    //         }
    //     }))
    // }

    // handleLastName = (e) => {
    //     const { name, value } = e.target

    //     this.setState((prev) => ({
    //         ...prev,
    //         user: {
    //             ...prev.user,
    //             familiya: value
    //         }
    //     }))
    // }


    handlechange = (e) => {
        const { name, value } = e.target

        console.log("name ", name, " value ", value)
        this.setState((prev) => ({
            ...prev,
            user: {
                ...prev.user,
                // ism: value,
                // familiya: value
                [name]: value
            }
        }))

    }

  render() {

    console.log("state ", this.state)
    return (
        <>
            <form className='bg-color-green'>
                <label> Ismi </label>
                <input 
                    name='ism'
                    placeholder='Ismini kiriting'
                    onChange={this.handlechange} 
                />
                <br />
                <label> Familiyasi </label>
                <input 
                    name='familiya' 
                    placeholder='Familiyasini kiriting'
                    onChange={this.handlechange} 
                />
                <br />
                <label> Email </label>
                <input 
                    name='email' 
                    placeholder='Emailni kiriting'
                    onChange={this.handlechange} 
                />
                <br />
                <label> Password </label>
                <input 
                    name='password' 
                    placeholder='Familiyasini kiriting'
                    onChange={this.handlechange} 
                />
                <br />
                <button>Jo'natish</button>

                <div>
                    <h2>Talaba ma'lumotlari</h2>
                    <h3>Ismi : {this.state.user.ism}</h3>
                    <h3>Familiya : {this.state.user.familiya}</h3>
                    <h3>Email : {this.state.user.email}</h3>
                    <h3>Password : {this.state.user.password}</h3>
                </div>
            </form>
        </>
    )
  }
}
