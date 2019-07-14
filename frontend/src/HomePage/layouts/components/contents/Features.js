import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <section id="features" className="space-big">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto center">
                            <div className="section-heading">
                                <h1>LĨNH VỰC</h1>
                                <p>Nhằm đáp ứng nhu cầu ôn tập các môn học khoa học tự nhiên, khoa học xã hội,...</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-space">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>LỊCH SỬ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-space">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>ĐỊA LÝ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-space">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>NGOẠI NGỮ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-space-mob">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>VĂN HỌC</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-space-mob">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>CÔNG NGHỆ</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="features-box wow fadeInDown" data-wow-duration="1s">
                                <div className="features-content">
                                    <h6>KINH TẾ</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
