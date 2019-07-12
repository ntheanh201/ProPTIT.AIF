import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id="footer" className="space-big bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="footer-content center">
                                <img src="images/logo-2.png" alt="Image not loaded" />
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
                                        <a href=""><i className="fab fa-vimeo blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-youtube blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-instagram blue" /></a>
                                    </li>
                                    <li>
                                        <a href=""><i className="fab fa-linkedin blue" /></a>
                                    </li>
                                </ul>
                                <p>© All right reserved. Template created by <a href="http://davidrakic.xyz/">David</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
