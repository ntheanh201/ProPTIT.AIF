import React, { Component } from 'react'

export default class Plans extends Component {
    render() {
        return (
            <section id="plans" className="space-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto center">
                            <div className="section-heading mb-space">
                                <h1>Our Packages</h1>
                                <p>Quo an dicit facete. At placerat scriptorem deterruisset quo. Ea probo invidunt eloquents, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="plan mb-space wow fadeInDown mb-space-mob">
                                <img src="images/p1.png" alt="Image not loaded" />
                                <h6>basic plan</h6>
                                <h1><span>$</span>142</h1>
                                <p>Full Business analyzing, next generation accounting, and training sessions.</p>
                                <a href="#" className="btn-blue btn-big anim">Get started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="plan mb-space wow fadeInDown mb-space-mob">
                                <img src="images/p2.png" alt="Image not loaded" />
                                <h6>premium plan</h6>
                                <h1><span>$</span>268</h1>
                                <p>Full Business analyzing, next generation accounting, and training sessions.</p>
                                <a href="#" className="btn-blue btn-big anim">Get started</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                            <div className="plan wow fadeInDown">
                                <img src="images/p3.png" alt="Image not loaded" />
                                <h6>business plan</h6>
                                <h1><span>$</span>415</h1>
                                <p>Full Business analyzing, next generation accounting, and training sessions.</p>
                                <a href="#" className="btn-blue btn-big anim">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
