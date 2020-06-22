import React from 'react';
import PropTypes from 'prop-types';
import './CollectionItem.scss';
import { Button, Grid } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

const CollectionItem = ({ name, price, imageUrl, history }) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <div className='CollectionItem'>
        {/* TODO: Fix clock on button trigger Imagecontainer onlcick */}
        <div className='ImageContainer' onClick={() => history.push('/zebi')}>
          <Button className='addToCart' component={Link} to='/sberdila'>
            add to cart
          </Button>
          <div className='CollectionImage' style={{ backgroundImage: `url(${imageUrl})` }} />
        </div>
        <div className='CollectionFooter'>
          <span className='name'>{name}</span>
          <span className='price'>{price}.00 $</span>
        </div>
      </div>
    </Grid>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default withRouter(CollectionItem);
