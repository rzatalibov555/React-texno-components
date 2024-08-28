
import { Component } from "react";
import "./Social.css"

class Social extends Component{
    render(){

        const {icon_name} = this.props

        return(
            <li>
         
            <i class={`fa fa-${icon_name}`} aria-hidden="true"></i>
        </li>
        )
    }
}
export default Social