import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { addItemToCart } from '../../../Redux/Cart/CartActions';
import './CollectionItem.scss';
import PropTypes from 'prop-types';

const CollectionItem = ({ item, item: { name, price, imageUrl }, addItemToCart }) => {
  //FIXME: i need to edit this component later
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <div className='CollectionItem'>
        <div className='ImageContainer'>
          <Button className='AddToCart' onClick={() => addItemToCart(item)}>
            add to cart
          </Button>
          <Button className='MoreDetails' onClick={() => addItemToCart(item)}>
            more details
          </Button>
          <div className='CollectionImage' style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
        <div className='CollectionFooter'>
          <span className='Name'>{name}</span>
          <span className='Price'>${price}.00</span>
        </div>
      </div>
    </Grid>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  addItemToCart: PropTypes.func
};

export default withRouter(connect(null, { addItemToCart })(CollectionItem));
