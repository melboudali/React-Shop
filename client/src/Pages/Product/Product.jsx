import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentItem } from '../../../Redux/Shop/ShopSelectors';
import PropTypes from 'prop-types';

const Product = ({ CurrentItem }) => {
  return CurrentItem ? (
    <div>
      Item Name: {CurrentItem.name}
      <img src={CurrentItem.imageUrl} alt='' />
    </div>
  ) : (
    <h1>Not Found</h1>
  );
};

Product.propTypes = {};

const mapStateToProps = createStructuredSelector({
  CurrentItem: (
    state,
    {
      match: {
        params: { itemName }
      },
      history: {
        location: { pathname }
      }
    }
  ) => SelectCurrentItem(itemName, pathname.split('/')[2])(state)
});

export default connect(mapStateToProps)(Product);
