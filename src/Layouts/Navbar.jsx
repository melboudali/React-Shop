import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../Firebase/Firebase.utils';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import './Navbar.scss';

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

const Navbar = ({ Container, history, CurrentUser = null }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [getShowNav, setShowNav] = useState(false);
  const [getNavScrollDown, setNavScrollDown] = useState(false);

  useEffect(() => {
    let windowOffset = 0;
    window.onscroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > 70) {
        setShowNav(true);
        if (currentScroll < windowOffset) {
          setNavScrollDown(true);
        } else {
          setNavScrollDown(false);
        }
      } else {
        setShowNav(false);
      }
      windowOffset = window.pageYOffset;
    };
  }, [CurrentUser]);

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
          getShowNav ? (getNavScrollDown ? 'showNavbar Navbar' : 'hideNavbar Navbar') : 'Navbar'
        }>
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Hidden mdUp>
              <IconButton edge='start' color='inherit' aria-label='open drawer'>
                <i className='fal fa-bars'></i>
              </IconButton>
            </Hidden>
            <Typography className='NavbarMenu' variant='h6' noWrap>
              <img
                className='logo'
                src='https://cdn.shopify.com/assets/images/logos/shopify-bag.png'
                alt='logo'
              />
              React Store
            </Typography>
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
              <IconButton className='navbarSvg' color='inherit'>
                <i className='fal fa-search NavIcons'></i>
              </IconButton>
              {CurrentUser ? (
                <IconButton
                  className='profile'
                  aria-label='account of current user'
                  aria-controls={menuId}
                  color='inherit'>
                  <img src={CurrentUser.photoURL} alt='profile' />
                  <ul className='menu'>
                    <li onClick={() => history.push('/profile')}>Profile</li>
                    <li>My Account</li>
                    <li onClick={() => auth.signOut()}>Logout</li>
                  </ul>
                </IconButton>
              ) : (
                <Typography className='NavbarMenu' component={Link} to='/sign'>
                  SIGN IN
                </Typography>
              )}
              <IconButton
                className='navbarSvg'
                edge='end'
                aria-label='show 3 new items'
                color='inherit'>
                <Badge badgeContent={3} color='secondary'>
                  <i className='fal fa-shopping-cart NavIcons'></i>
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
                <i className='fal fa-ellipsis-v NavIcons'></i>
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
