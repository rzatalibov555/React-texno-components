


import { Component } from 'react'
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import './Header.css'
import Social from '../utilities/social/Social';

class Header extends Component {

    render(){
       return(
        <div className="header">

            <Logo/>
            <Menu/>
        <ul className="social_media_ul">
        <Social icon_name="facebook" />
        <Social icon_name="twitter" />
        <Social icon_name="github" />
        <Social icon_name="twitch" />
      </ul>



        </div>

       ) 
     
    }
}

export default Header;