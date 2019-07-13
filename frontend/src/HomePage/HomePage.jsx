import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import Header from './layouts/Header';
import ListItems from './layouts/components/chatpage/ListItems';
import styled from 'styled-components'
import SideBar from './layouts/components/chatpage/SideBar';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <Fragment>
                <Wrapper>
                    <SideBar />
                    <RightSide >
                        {/* <Header
                            left={240}
                            showingLogin={false}
                            showingAccount={true}
                            username={user.username}
                            fullName={user.firstName + " " + user.lastName}
                            id={user.id}
                            fixTop={false}
                        /> */}
                        <ListItems >
                            {this.props.children}
                        </ListItems>
                    </RightSide>

                </Wrapper>

                {/* <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{}}>
                        <h1>Hi {user.firstName}!</h1>
                        <p>You're logged in with React!!</p>
                        <h3>All registered users:</h3>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        }
                        <p>
                            <Link to="/login">Logout</Link>
                        </p>
                    </div>
                </div> */}
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

`;