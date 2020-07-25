import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import { FetchingCollections } from '../../Redux/Shop/ShopActions';
import Collections from '../../Components/ShopPageComponents/Collections/Collections';
import Loading from '../../Components/ShopPageComponents/Loading/Loading';
import CurrentCollection from '../../Components/ShopPageComponents/CurrentCollection/CurrentCollection';
import ItemDetails from '../../Components/ShopPageComponents/ItemDetails/ItemDetails';
import PropTypes from 'prop-types';

const Shop = ({ match, FetchingCollections, isLoading }) => {
  useEffect(() => {
    FetchingCollections();
  }, [FetchingCollections]);
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={isLoading ? Loading : Collections} />
      <Route
        exact
        path={`${match.path}/:collectionRouteName`}
        component={isLoading ? Loading : CurrentCollection}
      />
      <Route
        path={`${match.path}/:collectionRouteName/:itemName`}
        component={ItemDetails}
      />
    </Fragment>
  );
};

Shop.prototype = { match: PropTypes.object };

const mapStateToProps = createStructuredSelector({
  isLoading: SelectLoading
});

export default connect(mapStateToProps, { FetchingCollections })(Shop);
