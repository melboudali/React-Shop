import React from 'react';
import Grid from '@material-ui/core/Grid';
import EmailSubscription from '../../Components/Footer/EmailSubscription';
import Menu from '../../Components/Footer/Menu';
import SocialMedia from '../../Components/Footer/SocialMedia';
import './Footer.scss';

const Footer = () => (
  <div className='Footer'>
    <div className='Support'>
      <Grid container direction='row' justify='center' alignItems='flex-start'>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className='Container'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1' />
              <path d='M4 18l-1 -5h18l-2 4' />
              <path d='M5 13v-6h8l4 6' />
              <path d='M7 7v-4h-1' />
            </svg>
            <div className='Text'>
              <p className='Title'>free shipping</p>
              <p className='Desc'>on all orders.</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className='Container'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <rect x='4' y='13' rx='2' width='4' height='6' />
              <rect x='16' y='13' rx='2' width='4' height='6' />
              <path d='M4 15v-3a8 8 0 0 1 16 0v3' />
              <path d='M18 19a6 3 0 0 1 -6 3' />
            </svg>
            <div className='Text'>
              <p className='Title'>dedicated support</p>
              <p className='Desc'>quick response 24/7.</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className='Container'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <circle cx='12' cy='12' r='9' />
              <path d='M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1' />
              <path d='M12 6v2m0 8v2' />
            </svg>
            <div className='Text'>
              <p className='Title'>money-back guarantee</p>
              <p className='Desc'>worry-free shopping.</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    <Grid container direction='row' justify='center' alignItems='flex-start'>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <EmailSubscription />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Menu />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <SocialMedia />
      </Grid>
    </Grid>
    <p className='copyright'>© 2020 react shop - all rights reserved.</p>
  </div>
);

export default Footer;
