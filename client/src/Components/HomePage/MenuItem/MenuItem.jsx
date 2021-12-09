import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match: { url } }) => (
  <div className={`${size} MenuItem`} onClick={() => history.push(`${url}${linkUrl}`)}>
    <div className='BackgroundImage' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='Content'>
      <h1 className='Title'>{title}</h1>
      <span className='Sub'>shop now</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  url: PropTypes.string
};

export default withRouter(MenuItem);
