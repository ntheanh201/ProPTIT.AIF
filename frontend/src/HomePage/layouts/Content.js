import React, { Component, Fragment } from 'react'
import Features from './components/contents/Features';
import Feedback from './components/contents/Feedback';
import Utilities from './components/contents/Utilities';
import ExpertService from './components/contents/ExpertService';
import Plans from './components/contents/Plans';
import Team from './components/contents/Team';
import Main from './components/contents/Main';

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
