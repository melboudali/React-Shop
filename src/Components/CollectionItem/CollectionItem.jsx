import React from 'react';
import PropTypes from 'prop-types';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className='CollectionItem'>
      <div className='ImageContainer'>
        <div className='CollectionImage' style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
      <div className='CollectionFooter'>
        <span className='name'>{name}</span>
        <span className='price'>
          {price}.00 <i className='fal fa-usd-circle' />
        </span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default CollectionItem;
