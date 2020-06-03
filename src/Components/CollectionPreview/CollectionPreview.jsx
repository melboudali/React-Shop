import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import PropTypes from 'prop-types';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='CollectionPreview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...item }) => (
            <CollectionItem {...item} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {};

export default CollectionPreview;
