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
                                    <h1 className="tagline typer">Mở ra kỷ nguyên học tập mới.</h1>
                                    <p>Việc học tập truyền thống đang ngày càng trở nên nhàm chán trong thời kỳ hiện đại. Chúng tôi sẽ cung cấp cho bạn một trợ lý ảo giúp bạn có thể ôn tập mọi lúc mọi nơi. Hãy tham gia cùng chúng tôi!</p>
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
