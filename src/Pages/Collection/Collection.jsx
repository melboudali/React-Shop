import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollections } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem';
import NotFound from '../404/NotFound';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './Collection.scss';

const Collection = ({
  Collections,
  match: {
    params: { collectionId }
  }
}) => {
  // check if we have the collection first
  const currentCollection = Collections.find(collection => collection.routeName === collectionId);

  return currentCollection ? (
    <div className='CollectionPreview'>
      <h1 className='title'>
        <span>{currentCollection.title.toUpperCase()}</span>
      </h1>
      <Grid container direction='row' justify='center' alignItems='baseline' spacing={3}>
        {currentCollection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  ) : (
    <NotFound />
  );
};

Collection.propTypes = {
  Collections: PropTypes.array.isRequired,
  collectionId: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  Collections: SelectCollections
});

export default connect(mapStateToProps)(Collection);
