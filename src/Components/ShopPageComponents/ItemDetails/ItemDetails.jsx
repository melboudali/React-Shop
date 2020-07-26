import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentItem } from '../../../Redux/Shop/ShopSelectors';
import PropTypes from 'prop-types';

const ItemDetails = ({ CurrentItem }) => {
  // const { name = '', imageUrl = '' } = CurrentItem;
  return (
    CurrentItem ? (
      <div>
        Item Name: {CurrentItem.name}
        <img src={CurrentItem.imageUrl} alt='' />
      </div>
    ):<h1>Not Found</h1>
  );
};

ItemDetails.propTypes = {
  itemName: PropTypes.string
};

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

export default connect(mapStateToProps)(ItemDetails);
