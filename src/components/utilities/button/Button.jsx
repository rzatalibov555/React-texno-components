import { Component } from "react";

import './Button.css'

class Button extends Component{
    render(){

        const { type, text } = this.props

        return(
            <button type={type} className="card_button">{text}</button>
        )
    }
}

export default Button;