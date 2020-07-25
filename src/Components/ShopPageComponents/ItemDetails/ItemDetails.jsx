import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentItem } from '../../../Redux/Shop/ShopSelectors';
import PropTypes from 'prop-types';

const ItemDetails = ({
  CurrentItem,
  match: {
    params: { itemName }
  }
}) => {
  const { name, imageUrl } = CurrentItem.items.find(item => itemName === item.name);
  return (
    <div>
      Item Name: {name}
      <img src={imageUrl} alt='' />
    </div>
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
