import React, { Component, Fragment } from 'react'

export default class Utilities extends Component {
    render() {
        return (
            <Fragment>
                <section id="about" className="space-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1 className="mb15">We belive that design should be superiour</h1>
                                    <p className="mb-space">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse. At placerat scriptorem deterruisset quo. Ea probo invidunt eloquents.
                    <br /><br />
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <a href="" className="btn-blue btn-big anim">Know more!</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/fg.svg" className="img-fluid mob-fix-1" alt="Image not loaded" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-2" className="space-big bg-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/beb.svg" className="img-fluid mob-fix-2" alt="Image not loaded" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1>We build superior &amp; innovative software!</h1>
                                    <p className="mb-space">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex east pob lorem ispum.
                    <br /><br />
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</p>
                                    <a href="" className="btn-blue btn-big anim">Know more!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
