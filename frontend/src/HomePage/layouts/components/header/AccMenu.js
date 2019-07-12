import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'

export default function AccMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <Fragment>
            <Button style={{
                backgroundColor: "#4580c2",
                padding: "10px 26px",
                fontSize: "18px",
                color: "white"
            }} aria-controls="simple-menu" aria-haspopup="true"
            // onClick={handleClick}
            onMouseOver = {handleClick}
            >
                <i className="fas fa-user"></i><Label>{props.username}</Label>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <i className="fas fa-user"></i>
                    <StyledLink to={"/user?=" + props.id}>
                        {props.username}
                    </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <i className="far fa-question-circle"></i>
                    <StyledLink className="nav-StyledLink btn-form anim" to="">
                        {props.username}
                    </StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <i className="fas fa-sign-out-alt"></i>
                    <StyledLink className="nav-StyledLink btn-form anim" to="/home">
                        Logout
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Fragment>
    );
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 15px;
    :hover {
        text-decoration: none;
        color: black;
    }
`;

const Label = styled.span`
    margin-left: 15px;
`;