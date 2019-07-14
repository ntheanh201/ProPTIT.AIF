import React, { Component, Fragment } from 'react'
import Features from './components/contents/Features';
import Utilities from './components/contents/Utilities';
import Plans from './components/contents/Plans';
import Main from './components/contents/Main';

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <Main />
                <Features />
                <Utilities />
                <Plans />
                <br />
            </Fragment>
        )
    }
}
