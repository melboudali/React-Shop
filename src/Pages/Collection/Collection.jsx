import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentCollection } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem';
import NotFound from '../404/NotFound';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './Collection.scss';

const Collection = ({ CurrentCollection }) => {
  // check if we have the collection first
  // const currentCollection = Collections.find(collection => collection.routeName === collectionId);

  return CurrentCollection ? (
    <div className='CollectionPreview'>
      <h1 className='title'>
        <span>{CurrentCollection.title.toUpperCase()}</span>
      </h1>
      <Grid container direction='row' justify='center' alignItems='baseline' spacing={3}>
        {CurrentCollection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  ) : (
    <NotFound />
  );
};

Collection.propTypes = {
  CurrentCollection: PropTypes.object
};

const mapStateToProps = (state, otherProps) => ({
  CurrentCollection: SelectCurrentCollection(otherProps.match.params.collectionRouteName)(state)
});

export default connect(mapStateToProps)(Collection);
