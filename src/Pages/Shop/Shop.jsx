import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import { createStructuredSelector } from 'reselect';
import { updateCollections } from '../../Redux/Shop/ShopActions';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import Loading from '../../Components/ShopPageComponents/Loading/Loading';
import Collection from '../Collection/Collection';
import PropTypes from 'prop-types';

const Shop = ({ match, updateCollections, isLoading }) => {
  useEffect(() => {
    updateCollections();
  }, [updateCollections]);
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={isLoading ? Loading : CollectionOverview} />
      <Route
        path={`${match.path}/:collectionRouteName`}
        component={isLoading ? Loading : Collection}
      />
    </Fragment>
  );
};

Shop.prototype = { match: PropTypes.object };

const mapStateToProps = createStructuredSelector({
  isLoading: SelectLoading
});

export default connect(mapStateToProps, { updateCollections })(Shop);
