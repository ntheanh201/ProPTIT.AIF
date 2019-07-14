import React, { Component } from 'react'
import styled from 'styled-components'

export default class SideBarRight extends Component {
    render() {
        return (
            <Side tabIndex="0">
                <div className="smartphone-menu-trigger"></div>
                <Label><P>Kiến thức đã tạo</P>
                    <Button>Tiếng Anh</Button>
                    <Button>Ngữ Văn</Button>
                    <Button>Hóa Học</Button>
                </Label>
                <Label><P>Khóa học nổi bật</P>
                    <Button>Tiếng Anh</Button>
                    <Button>Ngữ Văn</Button>
                    <Button>Hóa Học</Button>
                </Label>

            </Side>
        )
    }
}
const Side = styled.div`
    float: right;
    background:@color-2nd;
    width: 25%;
    top:0;
    left:0;
    z-index:5;
    outline:none;
    margin-left: 2%;
`;

const Label = styled.div`
    margin-top: 20%;
    font-weight: bold;

`;

const P = styled.p`
    font-size: 20px;
`;

const Button = styled.button`
    display: block;
    margin-bottom: 2%;
    width: 90%;
    background-color: #4580c2;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    padding: 14px 19px 14px 19px;
`;


