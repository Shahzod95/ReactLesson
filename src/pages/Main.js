import Button from "../components/Button"
import Second from "./Second"
import users from '../mock/users.json'
import { Component } from "react"

import './main.css'

// Main -> Ona component
// Second -> Bola component
// pops -> 

export default class Main extends Component {

    render() {
        return(
            <>
                <h2>Main Page</h2>
                {/* <Second title="Rayhona" yoshi={17} /> */}
                {
                    users.map((item) => (
                        <div key={item.id} className="bg-color-green card">
                            <h2>Ismi : {item.first_name}</h2>
                            <h2>Familiyasi : {item.last_name}</h2>
                            <h4>Email: {item.email}</h4>
                        </div>
                    ))
                }
            </>
        )
    }
}

export { Main }