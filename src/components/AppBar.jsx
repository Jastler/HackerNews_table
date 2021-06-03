import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function ButtonAppBar({ route, routes }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => {}}
      >
        <List component="nav" aria-label="secondary mailbox folders">
          {routes.map((item) => (
            <ListItem
              button
              component={Link}
              to={item}
              onClick={() => setIsOpen(false)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon
              onClick={() => setIsOpen(true)}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {route.toUpperCase()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
