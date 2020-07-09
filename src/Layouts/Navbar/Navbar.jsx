import React, { useEffect, useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../Utils/Firebase';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import CartIcon from '../../Components/Navbar/CartIcon/CartIcon';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { SelectCurrentUser } from '../../Redux/User/UserSelectors';
import { createStructuredSelector } from 'reselect';
import './Navbar.scss';
import LogoImage from '../../Assets/Images/logo.png';
import {
  NavbarContainer,
  Logo,
  NavbarMenu,
  Signin,
  Search,
  Profile,
  MenuContainer,
  Menu
} from './Navbar.style';
// scss modules in order to use same classes and ids with other component
// import {classe1, class2 ... } from './Navbar.module.scss';
// OR
// import moduleClass from './Navbar.module.scss';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}));

const Navbar = ({ Container, history, currentUser }) => {
  const classes = useStyles();
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

  return (
    <Fragment>
      <NavbarContainer className={!getShowNav && (getNavScrollDown ? 'showNavbar' : 'hideNavbar')}>
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <Hidden mdUp>
              <IconButton edge='start' color='secondary' aria-label='open drawer'>
                <i className='fal fa-bars'></i>
              </IconButton>
            </Hidden>
            <Logo src={LogoImage} alt='logo' />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NavbarMenu variant='h6' component={Link} to='/'>
                HOME
              </NavbarMenu>
              <NavbarMenu>NEW ARRIVALS</NavbarMenu>
              <NavbarMenu component={Link} to='/shop'>
                SHOP
              </NavbarMenu>
              <NavbarMenu>ABOUT</NavbarMenu>
              <NavbarMenu>FAQS</NavbarMenu>
              <NavbarMenu>CONTACT</NavbarMenu>
              <Search disableRipple disableFocusRipple aria-label='Search'>
                <i className='fal fa-search NavIcons'></i>
              </Search>
              {currentUser ? (
                currentUser.photoURL ? (
                  <Profile disableRipple disableFocusRipple aria-label='Current User'>
                    <img src={currentUser.photoURL} alt='User' />
                    <div className='MenuContainer'>
                      <ul className='Menu'>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </ul>
                    </div>
                  </Profile>
                ) : (
                  <Profile disableRipple disableFocusRipple aria-label='Current User'>
                    <i className='fal fa-user' />
                    <MenuContainer>
                      <Menu>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </Menu>
                    </MenuContainer>
                  </Profile>
                )
              ) : (
                <Signin
                  disableRipple
                  disableFocusRipple
                  aria-label='Signin'
                  component={Link}
                  to='/signin'>
                  <i className='fal fa-user'></i>
                </Signin>
              )}
              <CartIcon getShowNav={getShowNav} getNavScrollDown={getNavScrollDown} />
            </div>
          </Toolbar>
        </Container>
      </NavbarContainer>
    </Fragment>
  );
};

Navbar.propTypes = {
  Container: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  currentUser: PropTypes.object
};

// We will use creaTeStructuredSelector if we have more selectors to call
const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser
});

// const mapStateToProps = state => ({
//   currentUser: SelectCurrentUser(state)
// });

// const mapStateToProps = ({ User: { currentUser } }) => ({
//   currentUser
// });

export default withRouter(connect(mapStateToProps)(Navbar));
