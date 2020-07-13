import styled, { css } from 'styled-components';
import { AppBar, Typography, IconButton, Toolbar } from '@material-ui/core';
import MediaQueries from '../../Config/StyledComponents';

const {
  extraSmallDevices,
  smallDevices,
  mediumDevices,
  largeDevices,
  extraLargeDevices
} = MediaQueries;

const grayColor = css`
  color: rgb(85, 85, 85) !important;
`;

const IconButtonStyle = css`
  padding: 0 !important;
  margin: 0 10px !important;
  width: 24px !important;
`;

const svgStyle = css`
  stroke: rgb(85, 85, 85) !important;
  width: 24px !important;
`;

const backgroundNone = css`
  background: none !important;
`;

const hideComponent = css`
  display: none !important;
`;

export const NavbarContainer = styled(AppBar)`
  width: 100%;
  height: 56px !important;
  position: fixed !important;
  background-color: #fff !important;
  z-index: 4;
  transition: all 0.3s !important;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.2) !important;
  transform: ${({ getshownav, getnavscrolldown }) =>
    !getshownav && (getnavscrolldown ? 'translate3d(0, 0, 0)' : 'translate3d(0, -60px, 0)')};
  .MuiToolbar-regular {
    min-height: 56px !important;
    height: 56px !important;
  }
`;

export const ToolbarContainer = styled(Toolbar)`
  padding: 0 !important;
`;

export const Hamburger = styled(IconButton)`
  display: block !important;
  ${IconButtonStyle}
  &:hover {
    ${backgroundNone}
  }
  .HamburgerIcon {
    ${svgStyle}
  }
  ${largeDevices} {
    ${hideComponent}
  }
  ${extraLargeDevices} {
    ${hideComponent}
  }
`;

export const Logo = styled.img`
  height: 50px;
`;

export const DesktopMenu = styled.div`
  display: none;
  ${largeDevices} {
    display: flex;
  }
`;

export const Grow = styled.div`
  flex-grow: 1;
`;

export const NavbarMenu = styled(Typography)`
  ${grayColor}
  font-size: 0.9rem !important;
  padding: 13px !important;
  letter-spacing: 1px;
  text-decoration: none !important;
  font-weight: 400 !important;
  &:focus,
  &:active {
    border: none !important;
  }
`;

export const MenuContainer = styled.div`
  ${backgroundNone};
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 95%;
  padding: 0;
  width: fit-content;
  z-index: 5;
  transition-duration: 0.3s;
`;

export const Search = styled(IconButton)`
  ${grayColor}
  ${IconButtonStyle}
  &:hover {
    ${backgroundNone}
  }
  .SearchIcon {
    ${svgStyle}
  }
`;

export const Signin = styled(IconButton)`
  ${grayColor}
  ${IconButtonStyle}
  &:hover {
    ${backgroundNone}
  }
  .SigninIcon {
    ${svgStyle}
  }
`;

export const Profile = styled(IconButton)`
  ${IconButtonStyle}
  &:hover {
    ${backgroundNone}
    ${MenuContainer} {
      visibility: visible;
      opacity: 1;
      transform: translateY(-10px);
    }
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const Menu = styled.ul`
  width: fit-content;
  padding: 0;
  text-align: left;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px #00000015;
  li {
    min-width: 127px;
    color: #5e5e5e;
    display: block;
    border-radius: 2px;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Roboto';
    padding: 12px 8px;
    margin: 0;
    list-style: none;
    text-align: left;
    &:hover {
      color: #b3b3b3;
      background-color: #fdfdfd;
    }
  }
`;
