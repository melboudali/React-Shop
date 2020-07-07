import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Button, Grid } from '@material-ui/core';
import { withRouter ,Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items, routeName, match }) => {
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
      <Button className='SeeMore' to={`${match.path}/${routeName}`} component={Link}>
        SEE MORE
      </Button>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default withRouter(CollectionPreview);
