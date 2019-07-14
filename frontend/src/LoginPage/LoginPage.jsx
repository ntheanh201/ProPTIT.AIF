import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { userActions } from '../_actions';
import Header from '../HomePage/layouts/Header';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Fragment>
                <Header showingLogin={false} showingAccount={false} fixTop={true}/>
            <Section>
                <Container>
                    <SignupContent>
                        <SignupImage>
                            <figure><img src="../src/Assets/images/eve.png" alt="sing up image" /></figure>
                            <SignupImageLink to="/register">Tạo một tài khoản</SignupImageLink>
                        </SignupImage>
                        <SignupForm>
                            <FormTitle>Đăng nhập</FormTitle>
                            <RegisterForm onSubmit={(e) => this.handleSubmit(e)}>
                                <FormGroup>
                                    <label htmlFor="username">
                                        <i className="fas fa-user"></i>
                                    </label>
                                    <input
                                        value={username} onChange={(e) => this.handleChange(e)}
                                        type="text" name="username" id="username" placeholder="Username" />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="password">
                                    <i className="fas fa-lock"></i>
                                    </label>
                                    <input
                                        value={password} onChange={(e) => this.handleChange(e)}
                                        type="password" name="password" id="pass" placeholder="Password" />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </FormGroup>
                                {/* <FormGroup>
                                    <AgreeTermInput type="checkbox" name="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in <a href="#" className="term-service">Terms of service</a></label>
                                </FormGroup> */}
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                                <FormButton>
                                    <SubmitInput type="submit" value="Login" name="signin" id="sigin" />
                                </FormButton>
                            </RegisterForm>
                        </SignupForm>
                    </SignupContent>
                </Container>
            </Section>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };


const Section = styled.section`
    position: absolute;
    top: 200px;
    bottom: 0; left: 0; right: 0;
    margin: auto;
`;

const Container = styled.div`
    // width: 900px;
    background: #fff;
    margin: 0 auto;
    box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    -o-border-radius: 20px;
    -ms-border-radius: 20px;
    @media (max-width: 1280px){
        width: calc(100% - 30px);
        max-width: 100%;
    }
    @media (min-width: 1024px){
        max-width: 1200px;
    }
`;

const SignupContent = styled.div`
    padding: 75px 0;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        -moz-flex-direction: column;
        -webkit-flex-direction: column;
        -o-flex-direction: column;
        -ms-flex-direction: column;
        justify-content: center;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -o-justify-content: center;
        -ms-justify-content: center;
    }
`;

const SignupForm = styled.div`
    width: 50%;
    overflow: hidden;
    margin-left: 75px;
    margin-right: 75px;
    padding-left: 34px;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding: 0 30px;
    }
`;

const FormTitle = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.66;
    padding: 0;
    font-weight: 700;
    color: #222;
    font-family: Poppins;
    font-size: 36px;
`;

const RegisterForm = styled.form`
    width: 100%;
`;

const FormGroup = styled.div`
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    :last-child {
        margin-bottom: 0;
    }
`;

const AgreeTermInput = styled.input`
    display: inline-block;
    width: auto;
`;

const FormButton = styled.div`
    position: relative;
    margin-bottom: 25px;
    overflow: hidden;
    :last-child {
        margin-bottom: 0;
    }
    text-align: center;
`;

const SubmitInput = styled.input`
    display: inline-block;
    background: #6dabe4;
    color: #fff;
    border-bottom: none;
    width: auto;
    padding: 15px 39px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    margin-top: 25px;
    cursor: pointer;
    :hover {
        background: #4292dc;
    }
    margin-top: 0px;
`;

const SignupImage = styled.div`
    width: 50%;
    overflow: hidden;
    margin: 0 55px;
    margin-top: 45px;
    width: auto;
`;

const SignupImageLink = styled(Link)`
    font-size: 14px;
    color: #222;
    display: block;
    text-align: center;
`;