import React from 'react';
import {NavbarWrapper, Logo, LogoText, UList, ListItem, Anchor, StyledLink} from './style'
const Navbar = (props) => {
    return(
        <NavbarWrapper>
             <div className="navbar">
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>

                
                <UList>
                    <ListItem><StyledLink to='/'>Home</StyledLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><StyledLink to='/contact'>Contact</StyledLink></ListItem>
                </UList>
                
            </div>
            
        </div>
        </NavbarWrapper>
    )
}

export default Navbar;