import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCurrentItem } from '../../Redux/Shop/ShopSelectors';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ImagesViewer from '../../Components/Product/ImagesViewer';
import ProductDetails from '../../Components/Product/ProductDetails';
import Comments from '../../Components/Product/Comments';
import NotFound from '../404/NotFound';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Product = ({
  CurrentItem,
  history: {
    location: { pathname }
  }
}) => {
  const paths = pathname.toUpperCase().split('/');
  return CurrentItem ? (
    <ProductContainer>
      <Grid container direction='row' justify='center' alignItems='flex-start' spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <BreadCrumbs
            separator={
              <svg viewBox='0 0 24 24'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <polyline points='9 6 15 12 9 18' />
              </svg>
            }
            aria-label='Breadcrumb'>
            <Link href='/'>
              {/* <svg viewBox='0 0 24 24'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <polyline points='5 12 3 12 12 3 21 12 19 12' />
                <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
              </svg> */}
              home
            </Link>
            <Link href={`/${paths[1].toLowerCase()}`}>{paths[1]}</Link>
            <Link href={`/${paths[2].toLowerCase()}`}>{paths[2]}</Link>
            <span>{CurrentItem.name}</span>
          </BreadCrumbs>
        </Grid>
        <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
          <ImagesViewer item={CurrentItem} />
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} xl={5}>
          <ProductDetails item={CurrentItem} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Comments item={CurrentItem} />
        </Grid>
      </Grid>
    </ProductContainer>
  ) : (
    <NotFound />
  );
};

Product.propTypes = {
  CurrentItem: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
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

const ProductContainer = styled.div`
  /* margin-bottom: 50px; */
`;

const BreadCrumbs = styled(Breadcrumbs)`
  margin: 25px 0 !important;
  color: rgb(85, 85, 85) !important;
  font-size: 0.7rem !important;
  font-weight: 500 !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  text-decoration: none !important;

  svg {
    width: 28px !important;
    height: 28px !important;
    stroke: rgb(143, 143, 143) !important;
    stroke-width: 1.5 !important;
    stroke-linecap: round !important;
    stroke-linejoin: round !important;
    fill: none !important;
    &:nth-child(1) {
      margin-right: 5px !important;
      width: 15px !important;
      height: 15px !important;
    }
  }
  a {
    color: rgb(143, 143, 143) !important;
    text-decoration: none !important;
    display: flex !important;
    vertical-align: middle !important;
  }
`;

export default connect(mapStateToProps)(Product);
