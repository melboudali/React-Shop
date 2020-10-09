import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentItem } from '../../Redux/Shop/ShopSelectors';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductContainer = styled.div`
  margin-bottom: 50px;
`;

const BreadCrumbs = styled(Breadcrumbs)`
  margin: 25px 0 25px 25px !important;
  color: rgb(85, 85, 85) !important;
  font-size: 0.7rem !important;
  font-weight: 500 !important;
  letter-spacing: 3px !important;
  text-transform: uppercase !important;
  text-decoration: none !important;

  svg {
    width: 20px;
    height: 20px;
    stroke: rgb(143, 143, 143);
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    &:nth-child(1) {
      margin-right: 5px !important;
      width: 16px !important;
      height: 16px !important;
    }
  }
  a {
    color: rgb(143, 143, 143) !important;
    text-decoration: none !important;
    display: flex !important;
    vertical-align: middle !important;
  }
`;

const Product = ({ CurrentItem, history }) => {
  const paths = history.location.pathname.toUpperCase().split('/');

  return CurrentItem ? (
    <ProductContainer>
      <BreadCrumbs
        separator={
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='9 6 15 12 9 18' />
          </svg>
        }
        aria-label='Breadcrumb'>
        <Link href='/'>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <polyline points='5 12 3 12 12 3 21 12 19 12' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
          home
        </Link>
        <Link href={`/${paths[1].toLowerCase()}`}>{paths[1]}</Link>
        <Link href={`/${paths[2].toLowerCase()}`}>{paths[2]}</Link>
        <span>{CurrentItem.name}</span>
      </BreadCrumbs>
      Item Name: {CurrentItem.name}
      <img src={CurrentItem.firstImageUrl} alt='' />
    </ProductContainer>
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
