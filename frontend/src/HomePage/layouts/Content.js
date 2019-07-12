import React, { Component, Fragment } from 'react'
import Features from './components/Features';
import Feedback from './components/Feedback';
import Utilities from './components/Utilities';
import ExpertService from './components/ExpertService';
import Plans from './components/Plans';
import Team from './components/Team';
import Main from './components/Main';

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <Main />
                <Features />
                <Feedback />
                <Utilities />
                <ExpertService />
                <Plans />
                <Team />
                <br />
            </Fragment>
        )
    }
}
