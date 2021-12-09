import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Title from '../../../SectionTitle/SectionTitle';
import CollectionItem from '../../CollectionItem/CollectionItem';
import './CollectionsContainer.scss';
import PropTypes from 'prop-types';

const CollectionsContainer = ({ title, items, routeName, match }) => (
  <div className='CollectionsContainer'>
    <Title title={title} />
    <Grid container direction='row' justify='center' alignItems='flex-start' spacing={0}>
      {items.slice(0, 8).map((item, itemId) => (
        <CollectionItem key={itemId} item={item} title={title.toLowerCase()} />
      ))}
    </Grid>
    {routeName && (
      <Button className='SeeMore' to={`${match.path}/${routeName}`} component={Link}>
        SEE MORE
      </Button>
    )}
  </div>
);

CollectionsContainer.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  routeName: PropTypes.string,
  match: PropTypes.object.isRequired
};

export default withRouter(CollectionsContainer);
