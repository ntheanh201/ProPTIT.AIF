import React, { Component } from 'react'

export default class Plans extends Component {
    render() {
        return (
            <section id="plans" className="space-big bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto center">
                            <div className="section-heading mb-space">
                                <h1>Các gói dịch vụ</h1>
                                <p>Chúng tôi đưa ra những giải pháp cho cộng đồng</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="plan mb-space wow fadeInDown mb-space-mob">
                                <img src="images/p1.png" alt="Image not loaded" />
                                <h6>Gói cơ bản</h6>
                                <h1 style={{color: 'red'}}>Free</h1>
                                <p>Tạo dựng quản lí khóa học của bản thân</p>
                                <a href="/login" className="btn-blue btn-big anim">Bắt đầu</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="plan mb-space wow fadeInDown mb-space-mob">
                                <img src="images/p2.png" alt="Image not loaded" />
                                <h6>Gói Premium</h6>
                                <h1 style={{color: 'red'}}><span>$</span>2</h1>
                                <p>Chia sẻ nguồn kiến thức với cộng đồng và lợi nhuận</p>
                                <a href="/login" className="btn-blue btn-big anim">Bắt đầu</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
