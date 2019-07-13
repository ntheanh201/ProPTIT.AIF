import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SocketConnect from './SocketConnect';
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
  constructor(props) {
    super(props)
    this.state = {
      messages: [{
          user: 'BOT',
          content: 'Xin chào, bạn cần tôi giúp đỡ gì không?'
        }, {
          user: 'me',
          content: 'Xin chào'
        }, {
          user: 'BOT',
          content: 'Xin chào, bạn cần tôi giúp đỡ gì không?'
        }, {
          user: 'me',
          content: 'Xin chào'
        }, 
        {
          user: 'BOT',
          content: 'Xin chào, bạn cần tôi giúp đỡ gì không?'
        }, {
          user: 'me',
          content: 'Xin chào'
        }, 
      ],
    }
  }

  handleChange = (event) => {
    this.setState({
      messages: [...messages, ]
    })
  }

  handleDeleteClick = (id) => {
    const { messages } = this.state;
    let arrMessages = messages;
    arrMessages.splice(id, 1)
    this.setState({ messages: arrMessages })
  }

  isBot = (user) => {
    return (user === 'BOT') ? 'bot' : "me";
  }

  render() {
    const { classes } = this.props;
    const { messages } = this.state;
    return (
      <Fragment>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Messages
        </Typography>
        <CssBaseline />
        <Paper square className={classes.paper}>
          <List className={classes.list}>
            {messages.map(({ user, content }, index) => 
              <Fragment key={index}><ListItem button><Avatar alt="Profile Picture" src={ '../../../../src/Assets/images/' + this.isBot(user)  +".png"} /> 
               <StyledListItemText primary={user} secondary={content} /></ListItem></Fragment>
            )}
          </List>
        </Paper>
        <SocketConnect />
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