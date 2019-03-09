import React from 'react';

import Nav from "./Header/Nav";
import ButtonMob from "./Header/ButtonMob";
import Logo from "./Header/Logo";
import Address from "./Header/Address";

export default class Header extends React.Component {

    render(){
        return(
            <div className="Header">
                <Nav/>
                <ButtonMob/>
                <Logo/>
                <Address/>
            </div>
        );
    }
}