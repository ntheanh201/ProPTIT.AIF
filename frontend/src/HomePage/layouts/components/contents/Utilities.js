import React, { Component, Fragment } from 'react'

export default class Utilities extends Component {
    render() {
        return (
            <Fragment>
                <section id="about" className="space-big bg-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1 className="mb15">Trợ lí ảo bằng giọng nói</h1>
                                    <p className="mb-space">Chúng tôi tích hợp tính năng hỏi đáp bằng giọng nói, giúp bạn có một “người bạn” ảo, ôn tập bằng cách giao tiếp, giúp kích thích trí nhớ. Đồng thời có một số tính năng khác như nhắc nhở học tập, làm các bài kiểm tra với nguồn kiến thức mới</p>
                                    <a href="" className="btn-blue btn-big anim">Tìm hiểu thêm!</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/fg.svg" className="img-fluid mob-fix-1" alt="Image not loaded" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-2" className="space-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/beb.svg" className="img-fluid mob-fix-2" alt="Image not loaded" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1>Đóng góp kiến thức</h1>
                                    <p className="mb-space">Bạn sẽ không chỉ sở hữu nguồn kiến thức của riêng bạn, mà còn có thể chia sẻ kiến thức với người khác dưới dạng các khóa học, các học viên muốn tham gia khóa học của bạn sẽ chi trả cho khóa học của bạn, bạn có thể nhận đến 80% chi phí của khóa học</p>
                                    <a href="" className="btn-blue btn-big anim">Tìm hiểu thêm!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="space-big bg-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1 className="mb15">Ôn tập kiến thức</h1>
                                    <p className="mb-space">Bạn có thể ôn tập bằng cả kiến thức mình đóng góp, cũng có thể ôn tập bằng kiến thức người khác, điều này sẽ mang lại tính khách quan trong ôn tập, giúp cho việc học tập hiệu quả luôn.
</p>
                                    <a href="" className="btn-blue btn-big anim">Tìm hiểu thêm!</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/fg.svg" className="img-fluid mob-fix-1" alt="Image not loaded" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-2" className="space-big">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img src="images/beb.svg" className="img-fluid mob-fix-2" alt="Image not loaded" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-content wow fadeInDown">
                                    <h1>Đánh giá khách quan</h1>
                                    <p className="mb-space">Các khóa học của bạn sẽ được đánh giá bởi những người khác, mang lại tính khách quan trong thông tin ôn tập, hoặc sử dụng những khóa học của người khác đã được đánh giá mang lại hiệu quả cao</p>
                                    <a href="" className="btn-blue btn-big anim">Tìm hiểu thêm!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
