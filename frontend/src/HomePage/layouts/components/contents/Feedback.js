import React, { Component } from 'react'

export default class Feedback extends Component {
    render() {
        return (
            <section id="fact" className="space-big bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto center">
                            <div className="section-heading mb-space">
                                <h1>What are clients say</h1>
                                <p>Quo an dicit facete. At placerat scriptorem deterruisset quo. Ea probo invidunt eloquents, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <img src="images/fas.svg" className="facts-bg-image mob-fix-1" alt="Image not loaded" />
                            <div className="fact-content center">
                                <h1 className="counter">105</h1>
                                <h6 className="upp">Project completed</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="fact-content center">
                                <h1 className="counter">211</h1>
                                <h6 className="upp">Happy clients</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="fact-content center">
                                <h1 className="counter">45</h1>
                                <h6 className="upp">Metting</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="fact-content center">
                                <h1 className="counter">178</h1>
                                <h6 className="upp">Pizza oredered</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
