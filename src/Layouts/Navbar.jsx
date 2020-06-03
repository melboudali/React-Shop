import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const Navbar = ({ Container, history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <i className='fal fa-envelope'></i>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <i className='fal fa-bell'></i>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          {/* <i className='fal fa-user'></i> */}
          <img
            src='https://cdn130.picsart.com/268656304018211.png?type=webp&to=min&r=640'
            alt='profile'
            style={{ width: '30px' }}
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position='static'>
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Hidden mdUp>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='open drawer'>
                <i className='fal fa-bars'></i>
              </IconButton>
            </Hidden>
            <Typography className={classes.title} variant='h6' noWrap>
              <img
                className='logo'
                src='https://cdn.shopify.com/assets/images/logos/shopify-bag.png'
                alt='logo'
              />
              React Store
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography
                variant='h7'
                component={Link}
                to='/'
                style={{ padding: '12px', color: 'white', textDecoration: 'none' }}>
                Home
              </Typography>
              <Typography
                variant='h7'
                style={{ padding: '12px', color: 'white', textDecoration: 'none' }}>
                Categories
              </Typography>
              <Typography
                variant='h7'
                component={Link}
                to='/Shop'
                style={{ padding: '12px', color: 'white', textDecoration: 'none' }}>
                Shop
              </Typography>
              <Typography
                variant='h7'
                style={{ padding: '12px', color: 'white', textDecoration: 'none' }}>
                Account
              </Typography>
              <Typography
                variant='h7'
                style={{ padding: '12px', color: 'white', textDecoration: 'none' }}>
                Support
              </Typography>
              <IconButton color='inherit'>
                <i className='fal fa-search'></i>
              </IconButton>
              <IconButton
                className='profile'
                aria-label='account of current user'
                aria-controls={menuId}
                // aria-haspopup='true'
                // onClick={handleProfileMenuOpen}
                color='inherit'>
                {/* <i className='fal fa-user'></i> */}
                <img
                  src='https://cdn130.picsart.com/268656304018211.png?type=webp&to=min&r=640'
                  alt='profile'
                  style={{ width: '24px' }}
                />
                <ul className='menu'>
                  <li onClick={() => history.push('/profile')}>Profile</li>
                  <li>My Account</li>
                  <li>Logout</li>
                </ul>
              </IconButton>
              <IconButton aria-label='show 4 new mails' color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                  <i className='fal fa-envelope'></i>
                </Badge>
              </IconButton>
              <IconButton edge='end' aria-label='show 3 new items' color='inherit'>
                <Badge badgeContent={3} color='secondary'>
                  <i className='fal fa-shopping-cart'></i>
                </Badge>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'>
                <i className='fal fa-ellipsis-v'></i>
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

Navbar.propTypes = {};

export default withRouter(Navbar);
