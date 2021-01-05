import React, { Component } from 'react';
import { ThemeToggleContext } from '../Context';
import { NavLink } from 'react-router-dom';
import {Wrapper,ImageContainer,HeaderContent} from '../Styles/header'



class Header extends Component {

    handelToggle = ()=>{
        const {changeTheme} = this.context;
        document.querySelector('.slider').classList.toggle('active');
        changeTheme();
    }
    render() {
        return (
            <Wrapper>
                <ImageContainer>
                    <img className="desktop-header-img" src="/images/desktop/bg-pattern-header.svg" alt=""/>
                    <img className="mobile-header-img" src="/images/mobile/bg-pattern-header.svg" alt=""/>
                </ImageContainer>
                <HeaderContent>
                    <NavLink to="/">
                        <div className="logo_container">
                            <img src="/images/desktop/logo.svg" alt=""/>
                        </div>
                    </NavLink>
                    <div className="header_toggle">
                        <span>
                            <img src="/images/desktop/icon-sun.svg" alt=""/>
                        </span>
                        <button onClick={this.handelToggle}>
                        </button>
                        <span className="slider"></span>
                        <span>
                        <img src="/images/desktop/icon-moon.svg" alt=""/>
                        </span>
                    </div>
                </HeaderContent>
            </Wrapper>
        );
    }
}

export default Header;

Header.contextType = ThemeToggleContext;