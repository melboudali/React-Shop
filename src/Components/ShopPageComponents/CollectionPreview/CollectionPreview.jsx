import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import { Button, Grid } from '@material-ui/core';
import './CollectionPreview.scss';
import PropTypes from 'prop-types';

const CollectionPreview = ({ title, items, routeName, match }) => {
  // FIXME: i need to edit this component later.
  return (
    <div className='CollectionPreview'>
      <h1 className='Title'>
        <span>{title}</span>
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
  title: PropTypes.string,
  items: PropTypes.array,
  routeName: PropTypes.string,
  match: PropTypes.object
};

export default withRouter(CollectionPreview);
