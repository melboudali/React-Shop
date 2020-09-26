import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmailSubscription from '../../Components/Footer/EmailSubscription';
import Menu from '../../Components/Footer/Menu';
import SocialMediaIcons from '../../Components/Footer/SocialMediaIcons';
import './Footer.scss';

const Footer = () => (
  <div className='Footer'>
    <Grid container direction='row' justify='center' alignItems='flex-start'>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <EmailSubscription />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Menu />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <SocialMediaIcons />
      </Grid>
    </Grid>
    <p className='copyright'>Copyright © 2020 react shop. all rights reserved.</p>
  </div>
);

export default Footer;
