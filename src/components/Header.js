import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    NavItem
  } from 'reactstrap';
  import { NavLink } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';


function Header (props) {
    const name = "";
    return (
        <Navbar color='primary' sticky='top' expand='md'>
        
          <NavbarBrand href='/'>
            <img src = {NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
         
         

      </Navbar>
    );
  }

  export default Header;