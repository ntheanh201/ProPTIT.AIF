import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id="footer" className="space-small bg-blue">
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
                                <p>© All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
