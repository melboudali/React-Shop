import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollections } from '../../Redux/Shop/ShopSelectors';
import CollectionItem from '../../Components/ShopPageComponents/CollectionItem/CollectionItem';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './Collection.scss';

const Collection = ({
  Collections,
  match: {
    params: { collectionId }
  }
}) => {
  const { title, items } = Collections.find(collection => collection.routeName === collectionId);
  return (
    <div className='CollectionPreview'>
      <h1 className='title'>
        <span>{title.toUpperCase()}</span>
      </h1>
      <Grid container direction='row' justify='center' alignItems='flex-start' spacing={3}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

Collection.propTypes = {};

const mapStateToProps = createStructuredSelector({
  Collections: SelectCollections
});

export default connect(mapStateToProps)(Collection);
