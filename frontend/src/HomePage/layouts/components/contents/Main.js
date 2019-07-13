import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <section id="home-1" className="bg-blue">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12 al-lft">
                            <div className="intro">
                                <div className="intro-content mt80">
                                    <h1 className="tagline typer">Innovative way to design your life</h1>
                                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. It used very often, because Lorem is the best</p>
                                    <div className="subscriber-form auto">
                                        <form id="mc-form">
                                            <label className="mt10" htmlFor="mc-email" />
                                            <input type="email" id="mc-email" placeholder="Enter Your Email" />
                                            <button type="submit" className="plus-btn anim">Sub</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mob-hide">
                            <img src="images/home2.svg" className="img-fluid mt80 wow fadeInDown" alt="Image not loaded" data-wow-duration="2s" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
