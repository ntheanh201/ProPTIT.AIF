import React, { Fragment, memo } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Header from './layouts/Header';
import ListItems from './layouts/components/chatpage/ListItems';
import styled from 'styled-components'
import SideBar from './layouts/components/chatpage/SideBar';
import SocketConnect from './layouts/components/chatpage/SocketConnect';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [{
                name: 'bot',
                text: 'Chào bạn, tôi có thể giúp gì cho bạn?'
            }
            ],
        }
    }

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    createMessage = (message) => {
        const { messages } = this.state
        this.setState({
            messages: message.user !== "" ? [...messages, { name: 'user', text: message.user }, { name: 'bot', text: message.bot }] : [...messages]
        })


    }

    render() {
        const { user } = this.props;
        return (
            <Fragment>
                <Header
                    left={240}
                    showingLogin={false}
                    showingAccount={true}
                    username={user.username}
                    fullName={user.firstName + " " + user.lastName}
                    id={user.id}
                    fixTop={false}
                />
                <Wrapper>
                    <SideBar />
                    <RightSide >
                        <ListItems messages={this.state.messages} />
                        <SocketConnect createMessage={this.createMessage} />
                    </RightSide>
                </Wrapper>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };

const Wrapper = styled.div`
    display: flex;
`;

const RightSide = styled.div`
    width: 100%;
`;