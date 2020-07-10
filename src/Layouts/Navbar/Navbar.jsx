import React, { useEffect, useState, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../Utils/Firebase';
import { connect } from 'react-redux';
import CartIcon from '../../Components/Navbar/CartIcon/CartIcon';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentUser } from '../../Redux/User/UserSelectors';
import LogoImage from '../../Assets/Images/logo.png';
import {
  NavbarContainer,
  ToolbarContainer,
  Hamburger,
  Logo,
  DesktopMenu,
  Grow,
  NavbarMenu,
  Signin,
  Search,
  Profile,
  MenuContainer,
  Menu
} from './Style';
import PropTypes from 'prop-types';
// scss modules in order to use same classes and ids with other component
// import {classe1, class2 ... } from './Navbar.module.scss';
// OR
// import moduleClass from './Navbar.module.scss';

const Navbar = ({ Container, history, currentUser }) => {
  const [getShowNav, setShowNav] = useState(true);
  const [getNavScrollDown, setNavScrollDown] = useState(false);
  const [profileImage, setProfileImage] = useState('');

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
    //TODO: profile image i need to change this image later
    currentUser
      ? setProfileImage(currentUser.photoURL)
      : setProfileImage('https://image.flaticon.com/icons/png/512/64/64572.png');
  }, [currentUser]);

  return (
    <Fragment>
      <NavbarContainer getshownav={getShowNav ? 1 : 0} getnavscrolldown={getNavScrollDown ? 1 : 0}>
        <Container>
          <ToolbarContainer>
            <Hamburger edge='start'>
              <i className='fal fa-bars'></i>
            </Hamburger>
            <Logo src={LogoImage} alt='logo' />
            <Grow />
            <DesktopMenu>
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
                    <img
                      src={profileImage}
                      alt='User'
                      onError={() =>
                        setProfileImage('https://image.flaticon.com/icons/png/512/64/64572.png')
                      }
                    />
                    <MenuContainer>
                      <Menu>
                        <li onClick={() => history.push('/profile')}>MY PROFILE</li>
                        <li onClick={() => auth.signOut()}>SIGN OUT</li>
                      </Menu>
                    </MenuContainer>
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
            </DesktopMenu>
          </ToolbarContainer>
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
