import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({
  match: {
    params: { itemName }
  }
}) => {
  return <div>Item Name: {itemName}</div>;
};

ItemDetails.propTypes = {};

export default ItemDetails;
