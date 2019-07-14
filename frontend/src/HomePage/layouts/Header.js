import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import AccMenu from './components/header/AccMenu';

export default class Header extends Component {
    render() {
        const { showingLogin, showingAccount, fixTop, fullName, id, left } = this.props
        let fixedTop = fixTop ? "fixed-top" : null;
        return (
            <Nav className={"navbar navbar-expand-lg navbar-sticky " + fixedTop}
            style={{left: left+'px'}} 
            >
                <div className="container">
                    <a className="navbar-brand" href="/home">
                        <Img src="../../src/Assets/images/ta.jpg" alt="Image not loaded" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup1" aria-controls="navbarNavAltMarkup1" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-right menu-icon" />
                    </button> 
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Lĩnh vực</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Tính năng</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Dịch vụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    {showingLogin ?
                    <ul className="nav navbar-nav pull-right nav-help mob-hide">
                        <li className="nav-item item-cart">
                            <Link className="nav-link btn-form anim" to="/login">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-form anim" to="/register">Tham gia</Link>
                        </li>
                    </ul> : null
                    }
                    {
                        showingAccount ? 
                            <AccMenu id={id} fullName={fullName}/>
                            : null
                    }
                </div>
            </Nav>
                
        )
    }
}

const Nav = styled.nav`
    font-family: "Times New Roman", Times, serif!important;
`;

const Img = styled.img`
    // width: 20%;
    width: 190px;
`;