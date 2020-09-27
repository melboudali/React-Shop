import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectSections } from '../../Redux/Home/HomeSelectors';
import Grid from '@material-ui/core/Grid';
import SliderContainer from '../../Components/HomePageComponents/Slider/SliderContainer/SliderContainer';
import MenuItem from '../../Components/HomePageComponents/MenuItem/MenuItem';
import Title from '../../Components/SectionTitle/SectionTitle';
import CollectionContainer from '../../Components/ShopPageComponents/Collections/CollectionsContainer/CollectionsContainer';
import PopularThisWeek from '../../Components/HomePageComponents/PopularThisWeek/PopularThisWeek';
import PropTypes from 'prop-types';

const Home = ({ Sections }) => (
  <Fragment>
    <SliderContainer />
    <Title title='shop by categories' />
    <Grid container direction='row' justify='center' alignItems='flex-start'>
      {Sections.map(({ id, ...Sections }) => (
        <Grid
          item
          key={id}
          xs={12}
          sm={id > 2 ? 12 : 6}
          md={id > 2 ? 12 : 6}
          lg={id > 3 ? 6 : 4}
          xl={id > 3 ? 6 : 4}>
          <MenuItem {...Sections} />
        </Grid>
      ))}
    </Grid>
    <CollectionContainer title='popular this week' items={Data[0]} />
    <CollectionContainer title='new arrivals' items={Data[1]} />
  </Fragment>
);

Home.prototype = { Sections: PropTypes.array };

const mapStateToProps = createStructuredSelector({
  Sections: SelectSections
});

const Data = [
  [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25
    },
    {
      id: 2,
      name: 'Blue Beanie',
      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
      price: 18
    },
    {
      id: 3,
      name: 'Brown Cowboy',
      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
      price: 35
    },
    {
      id: 4,
      name: 'Grey Brim',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      price: 25
    },
    {
      id: 5,
      name: 'Green Beanie',
      imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
      price: 18
    },
    {
      id: 6,
      name: 'Palm Tree Cap',
      imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      price: 14
    },
    {
      id: 7,
      name: 'Red Beanie',
      imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
      price: 18
    },
    {
      id: 8,
      name: 'Wolf Cap',
      imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
      price: 14
    },
    {
      id: 9,
      name: 'Blue Snapback',
      imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      price: 16
    }
  ],
  [
    {
      id: 23,
      name: 'Blue Tanktop',
      imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
      price: 25
    },
    {
      id: 24,
      name: 'Floral Blouse',
      imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
      price: 20
    },
    {
      id: 25,
      name: 'Floral Dress',
      imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
      price: 80
    },
    {
      id: 26,
      name: 'Red Dots Dress',
      imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
      price: 80
    },
    {
      id: 27,
      name: 'Striped Sweater',
      imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
      price: 45
    },
    {
      id: 28,
      name: 'Yellow Track Suit',
      imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
      price: 135
    },
    {
      id: 29,
      name: 'White Blouse',
      imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
      price: 20
    }
  ]
];
export default connect(mapStateToProps)(Home);
