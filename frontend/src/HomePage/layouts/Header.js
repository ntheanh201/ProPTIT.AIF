import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { showingLogin } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-sticky fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/home"><img src="images/logo.png" alt="Image not loaded" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup1" aria-controls="navbarNavAltMarkup1" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-right menu-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    {showingLogin ?
                    <ul className="nav navbar-nav pull-right nav-help mob-hide">
                        <li className="nav-item item-cart">
                            <Link className="nav-link btn-form anim" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-form anim" to="/register">Join us</Link>
                        </li>
                    </ul> : null
                    }
                </div>
            </nav>
                
        )
    }
}
