import React, { Component } from 'react'
import styled from 'styled-components'

export default class SideBar extends Component {
  render() {
    return (
      <Side tabIndex="0">
        <div className="smartphone-menu-trigger"></div>
        <Avatar>
          <img src="../../../../src/Assets/images/bot.png" style={{width: '70%', marginTop: '40px'}}/>
          <Title>Eve</Title>
        </Avatar>
        <Content>
          "Xin chào, tôi là Eve - trợ lí ảo giúp bạn học tập dễ hơn"
        </Content>
      </Side>
    )
  }
}
const Side = styled.div`
  background-color: #fffff;
  // height:100vh;
  width: 25%;
  top:0;
  left:0;
  z-index:5;
  outline:none;
`;

const Avatar = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 10%;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 20px;
  text-align: center;
  width: 90%;
  margin: auto;
`;