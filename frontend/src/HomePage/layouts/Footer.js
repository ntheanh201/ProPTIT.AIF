import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id="footer" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="footer-content center">
                                <ul className="footer-social">
                                    <li>
                                        <a href=""><i className="fab fa-facebook blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-twitter blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-github blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-youtube blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-linkedin blue" /></a>
                                    </li>
                                </ul>
                                <p>© ProPTIT.AIF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
