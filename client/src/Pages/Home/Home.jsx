import React, { Profiler } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectSections } from '../../Redux/Home/HomeSelectors';
import Grid from '@material-ui/core/Grid';
import SliderContainer from '../../Components/HomePageComponents/Slider/SliderContainer/SliderContainer';
import MenuItem from '../../Components/HomePageComponents/MenuItem/MenuItem';
import PropTypes from 'prop-types';

const Home = ({ Sections }) => (
  <>
    <Profiler
      id='SliderContainer'
      onRender={(id, phase, actualDuration) => console.log({ id, phase, actualDuration })}>
      <SliderContainer />
    </Profiler>
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
  </>
);

Home.prototype = { Sections: PropTypes.array };

const mapStateToProps = createStructuredSelector({
  Sections: SelectSections
});

export default connect(mapStateToProps)(Home);
