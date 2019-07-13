import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components'

const styles = theme => ({
  text: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
    primary: {
      fontWeight: 'bold'
    }
  },
  subHeader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  button: {
    margin: theme.spacing(1),
  },
});

class ListItems extends Component {

  isBot = (name) => {
    return (name === 'bot') ? 'bot' : "user";
  }

  render() {
    const { classes } = this.props;
    const { messages } = this.props;
    return (
      <Fragment>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Messages
        </Typography>
        <CssBaseline />
        <StyledPaper square className={classes.paper}>
          <List className={classes.list}>
            {messages.map(({ name, text }, index) =>
              <Fragment key={index}><ListItem button><Avatar alt="Profile Picture" src={'../../../../src/Assets/images/' + this.isBot(name) + ".png"} />
                <StyledListItemText primary={this.isBot(name) === 'user' ? 'Me' : 'Bot'} secondary={text} /></ListItem></Fragment>
            )}
          </List>
        </StyledPaper>
      </Fragment>
    );
  }
}

ListItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItems);
const StyledListItemText = styled(ListItemText)`
  margin-left: 1%;
`;

const StyledPaper = styled(Paper)`
  overflow: auto;
  height: 620px;
`;