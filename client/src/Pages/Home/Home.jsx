import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectSections } from '../../Redux/Home/HomeSelectors';
import { SelectAllItems } from '../../Redux/Shop/ShopSelectors';
import Grid from '@material-ui/core/Grid';
import SliderContainer from '../../Components/HomePageComponents/Slider/SliderContainer/SliderContainer';
import MenuItem from '../../Components/HomePageComponents/MenuItem/MenuItem';
import Title from '../../Components/SectionTitle/SectionTitle';
import CollectionContainer from '../../Components/ShopPageComponents/Collections/CollectionsContainer/CollectionsContainer';
import PropTypes from 'prop-types';

const Home = ({ Sections, AllItems }) => (
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

    <CollectionContainer
      title='popular this week'
      items={[...new Map(AllItems.map(item => [item['name'], item])).values()].sort(
        (a, b) => b.orders - a.orders
      )}
    />

    <CollectionContainer
      title='new arrivals'
      items={[...new Map(AllItems.map(item => [item['name'], item])).values()].sort((a, b) =>
        a.id > b.id ? -1 : 1
      )}
    />
  </Fragment>
);

Home.prototype = { Sections: PropTypes.array.isRequired, AllItems: PropTypes.array.isRequired };

const mapStateToProps = createStructuredSelector({
  Sections: SelectSections,
  AllItems: SelectAllItems
});

export default connect(mapStateToProps)(Home);
