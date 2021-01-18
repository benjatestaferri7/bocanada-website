import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './Navbar'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Bocanada</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
