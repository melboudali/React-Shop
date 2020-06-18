import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '../../Components/Navbar/CartIcon/CartIcon';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import './Navbar.scss';
import Logo from '../../Assets/Images/logo.png';
// scss modules in order to use same classes and ids with other component
// import {classe1, class2 ... } from './Navbar.module.scss';
// OR
// import moduleClass from './Navbar.module.scss';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
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

const Navbar = ({ Container, history, currentUser }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [getShowNav, setShowNav] = useState(true);
  const [getNavScrollDown, setNavScrollDown] = useState(false);

  useEffect(() => {
    let windowOffset = 0;
    window.onscroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > 70) {
        setShowNav(false);
        if (currentScroll < windowOffset) {
          setNavScrollDown(true);
        } else {
          setNavScrollDown(false);
        }
      } else {
        setShowNav(true);
      }
      windowOffset = window.pageYOffset;
    };
  }, []);

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
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <i className='fal fa-bell NavIcons'></i>
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
      <AppBar
        position='static'
        className={
          !getShowNav ? (getNavScrollDown ? 'showNavbar Navbar' : 'hideNavbar Navbar') : 'Navbar'
        }>
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Hidden mdUp='true'>
              <IconButton edge='start' color='inherit' aria-label='open drawer'>
                <i className='fal fa-bars'></i>
              </IconButton>
            </Hidden>
            <img src={Logo} className='logo' alt='logo' />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className='NavbarMenu' variant='h6' component={Link} to='/'>
                HOME
              </Typography>
              <Typography className='NavbarMenu'>NEW ARRIVALS</Typography>
              <Typography className='NavbarMenu' component={Link} to='/shop'>
                SHOP
              </Typography>
              <Typography className='NavbarMenu'>ABOUT</Typography>
              <Typography className='NavbarMenu'>FAQS</Typography>
              <Typography className='NavbarMenu'>CONTACT</Typography>
              <IconButton disableRipple disableFocusRipple className='Search' aria-label='Search'>
                <i className='fal fa-search NavIcons'></i>
              </IconButton>
              {currentUser ? (
                currentUser.photoURL ? (
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    className='Profile'
                    aria-label='Current User'>
                    <img src={currentUser.photoURL} alt='User' />
                    <div className='MenuContainer'>
                      <ul className='Menu'>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </ul>
                    </div>
                  </IconButton>
                ) : (
                  <IconButton
                    disableRipple
                    disableFocusRipple
                    className='Profile'
                    aria-label='Current User'>
                    <i className='fal fa-user' />
                    <div className='MenuContainer'>
                      <ul className='Menu'>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </ul>
                    </div>
                  </IconButton>
                )
              ) : (
                <IconButton
                  disableRipple
                  disableFocusRipple
                  className='Signin'
                  aria-label='Signin'
                  component={Link}
                  to='/signin'>
                  <i className='fal fa-user'></i>
                </IconButton>
              )}
              <CartIcon cartItems={10} />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

Navbar.propTypes = {
  Container: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: state.User.currentUser
});

export default connect(mapStateToProps)(withRouter(Navbar));
