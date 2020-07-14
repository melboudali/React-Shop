import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import './Snackbar.scss';
import { clearAuthError } from '../../../Redux/User/UserActions';

const SnackbarComponent = ({ message = null, clearAuthError }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) setOpen(true);
    setTimeout(() => {
      clearAuthError();
    }, 5000);
  }, [message, clearAuthError]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message={
        <div className='ErrorMessage'>
          <i className='fad fa-times-circle errorIcon' />
          {`${message}`}
        </div>
      }
      action={
        <div className='CloseBtn' onClick={handleClose}>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <rect x='4' y='4' width='16' height='16' rx='2' />
            <path d='M10 10l4 4m0 -4l-4 4' />
          </svg>
        </div>
      }
    />
  );
};

SnackbarComponent.propTypes = { message: PropTypes.string };

export default connect(null, { clearAuthError })(SnackbarComponent);
