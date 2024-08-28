

import { Component } from "react";
import "./Menu.css"

class Menu extends Component{
    render(){
        return(
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Menu