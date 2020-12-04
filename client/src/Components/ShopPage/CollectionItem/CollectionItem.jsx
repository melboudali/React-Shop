import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { addItemToCart } from '../../../Redux/Cart/CartActions';
import './CollectionItem.scss';
import PropTypes from 'prop-types';

const CollectionItem = ({
  item,
  title,
  item: { name, oldPrice, newPrice, firstImageUrl, secondImageUrl, rate, orders },
  addItemToCart,
  history
}) => {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
      <div className='CollectionItem'>
        <div className='ImageContainer'>
          <span className='Discount'>{`-${Math.floor(
            ((oldPrice - newPrice) / oldPrice) * 100
          )}%`}</span>
          <div className='ItemImage' style={{ backgroundImage: `url(${firstImageUrl})` }} />
          <div
            className='SecItemImage'
            style={{
              backgroundImage: `url(${secondImageUrl})`
            }}
          />
        </div>
        <div className='CollectionFooter'>
          <div className='CollectionFooterContainer'>
            <span className='Name' title={name}>
              {name}
            </span>
            <span className='Price'>
              US ${parseFloat(newPrice).toFixed(2)}
              <span className='OldPrice'>${parseFloat(oldPrice).toFixed(2)}</span>
            </span>
            <span className='Rate'>
              <svg viewBox='0 0 1792 1792'>
                <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' />
              </svg>
              {rate}
            </span>
            <span className='Sold'>{`${orders} Order`}</span>
            <div className='Buttons'>
              <Button className='AddToCart' onClick={() => addItemToCart(item)}>
                <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z'
                  />
                  <path
                    fillRule='evenodd'
                    d='M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z'
                  />
                </svg>
                add to cart
              </Button>
              <Button
                className='MoreDetails'
                onClick={() =>
                  item.url
                    ? history.push(`${`/shop/`}${item.url.toLowerCase()}${`/`}${name}`)
                    : history.push(
                        `${history.location.pathname}${
                          title ? `/${title.toLowerCase()}/` : `/`
                        }${name}`
                      )
                }>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='14' cy='6' r='2' />
                  <line x1='4' y1='6' x2='12' y2='6' />
                  <line x1='16' y1='6' x2='20' y2='6' />
                  <circle cx='8' cy='12' r='2' />
                  <line x1='4' y1='12' x2='6' y2='12' />
                  <line x1='10' y1='12' x2='20' y2='12' />
                  <circle cx='17' cy='18' r='2' />
                  <line x1='4' y1='18' x2='15' y2='18' />
                  <line x1='19' y1='18' x2='20' y2='18' />
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
