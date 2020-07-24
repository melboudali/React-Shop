import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { addItemToCart } from '../../../Redux/Cart/CartActions';
import './CollectionItem.scss';
import PropTypes from 'prop-types';

const CollectionItem = ({ item, item: { name, price, imageUrl }, addItemToCart }) => {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
      <div className='CollectionItem'>
        <div className='ImageContainer'>
          <span className='Discount'>100%</span>
          <div className='ItemImage' style={{ backgroundImage: `url(${imageUrl})` }} />
          <div
            className='SecItemImage'
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f)`
            }}
          />
        </div>
        <div className='CollectionFooter'>
          <div className='CollectionFooterContainer'>
            <span className='Name' title={name}>
              {name}
            </span>
            <span className='Price'>
              US ${price}.00<span className='OldPrice'>$33.00</span>
            </span>
            <span className='Rate'>
              <svg viewBox='0 0 1792 1792'>
                <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' />
              </svg>
              4.5
            </span>
            <span className='Sold'>2330 Sold</span>
            <div className='Buttons'>
              <Button className='AddToCart' onClick={() => addItemToCart(item)}>
                <svg viewBox='0 0 1792 1792'>
                  <path d='M1280 704q0-26-19-45t-45-19h-128v-128q0-26-19-45t-45-19-45 19-19 45v128h-128q-26 0-45 19t-19 45 19 45 45 19h128v128q0 26 19 45t45 19 45-19 19-45v-128h128q26 0 45-19t19-45zm-576 832q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm896 0q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm128-1088v512q0 24-16 42.5t-41 21.5l-1044 122q1 7 4.5 21.5t6 26.5 2.5 22q0 16-24 64h920q26 0 45 19t19 45-19 45-45 19h-1024q-26 0-45-19t-19-45q0-14 11-39.5t29.5-59.5 20.5-38l-177-823h-204q-26 0-45-19t-19-45 19-45 45-19h256q16 0 28.5 6.5t20 15.5 13 24.5 7.5 26.5 5.5 29.5 4.5 25.5h1201q26 0 45 19t19 45z' />
                </svg>
                add to cart
              </Button>
              <Button className='MoreDetails' onClick={() => addItemToCart(item)}>
                <svg viewBox='0 0 64 64' enable-background='new 0 0 64 64'>
                  <g id='MORE_2_1_' enable-background='new    '>
                    <g id='MORE_2'>
                      <g>
                        <path d='M31.998,26c-3.314,0-6.001,2.687-6.001,6.001c0,3.313,2.687,6.001,6.001,6.001c3.314,0,6.002-2.688,6.002-6.001     C38,28.687,35.312,26,31.998,26z M31.998,19.001C35.312,19.001,38,16.314,38,13c0-3.313-2.688-6-6.002-6     c-3.314,0-6.001,2.686-6.001,6.001C25.997,16.315,28.684,19.001,31.998,19.001z M31.998,45c-3.314,0-6.001,2.688-6.001,6.001     s2.687,6.001,6.001,6.001c3.314,0,6.002-2.688,6.002-6.001S35.312,45,31.998,45z' />
                      </g>
                    </g>
                  </g>
                </svg>
              </Button>
            </div>
          </div>
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
