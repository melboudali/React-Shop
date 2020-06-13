import React, { useState } from 'react';
import MenuItem from '../../Components/MenuItem/MenuItem';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './Home.scss';

const Home = props => {
  const [getSections, setSections] = useState([
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]);

  return (
    <div className='Home'>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        {getSections.map(({ id, ...getSections }) => (
          <Grid
            item
            key={id}
            xs={12}
            sm={id > 2 ? 12 : 6}
            md={id > 2 ? 12 : 6}
            lg={id > 3 ? 6 : 4}
            xl={id > 3 ? 6 : 4}>
            <MenuItem {...getSections} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Home.propTypes = {};

export default Home;
