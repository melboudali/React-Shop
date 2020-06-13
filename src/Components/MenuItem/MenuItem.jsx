import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, subtitle, size, linkUrl, history, match: { url } }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${url}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(MenuItem);
