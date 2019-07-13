import React, { Component, Fragment } from 'react'
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import './Assets/css/animate.css';
import './Assets/css/custom.css';
import './Assets/css/bootstrap.min.css';

export default class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Header showingLogin = {true} showingAccount={false} fixTop={true}/>
                <Content />
                <Footer />
            </Fragment>
        )
    }
}
