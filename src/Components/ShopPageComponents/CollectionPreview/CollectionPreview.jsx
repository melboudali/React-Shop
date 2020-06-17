import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='CollectionPreview'>
      <h1 className='title'>
        <span>{title.toUpperCase()}</span>
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...item }) => (
            <CollectionItem key={id} {...item} />
          ))}
      </div>
      <Button className='SeeMore'>SEE MORE</Button>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CollectionPreview;
