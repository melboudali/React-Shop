import React from 'react';
import { addItemToCart } from '../../../Redux/Cart/CartActions';
import PropTypes from 'prop-types';
import './CollectionItem.scss';
import { Button, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CollectionItem = ({ item: { id, name, price, imageUrl }, addItemToCart }) => {
  const addToCart = () => {
    addItemToCart({
      id,
      name,
      price,
      imageUrl
    });
  };

  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <div className='CollectionItem'>
        {/* TODO: Fix clock on button trigger Imagecontainer onlcick */}
        <div className='ImageContainer'>
          <Button className='addToCart' onClick={addToCart}>
            add to cart
          </Button>
          <Button className='moreDetails' onClick={addToCart}>
            more details
          </Button>
          <div className='CollectionImage' style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
        <div className='CollectionFooter'>
          <span className='name'>{name}</span>
          <span className='price'>${price}.00</span>
        </div>
      </div>
    </Grid>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string
};

export default connect(null, { addItemToCart })(withRouter(CollectionItem));
