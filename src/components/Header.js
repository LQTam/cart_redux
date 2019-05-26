import React, { Component } from 'react'
import SideNav from './../components/nav/SideNav';
import Nav from './../components/nav/Nav';

export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <SideNav />
                    <Nav />
                </header>
            </>
        )
    }
}
