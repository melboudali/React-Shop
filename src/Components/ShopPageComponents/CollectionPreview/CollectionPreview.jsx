import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='CollectionPreview'>
      <h1 className='title'>
        <span>{title.toUpperCase()}</span>
      </h1>
      <Grid container direction='row' justify='center' alignItems='flex-start' spacing={3}>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Grid>
      <Button className='SeeMore'>SEE MORE</Button>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default CollectionPreview;
