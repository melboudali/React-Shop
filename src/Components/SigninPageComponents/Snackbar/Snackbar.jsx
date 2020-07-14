import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import './Snackbar.scss';

const SnackbarComponent = ({ message = null }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) setOpen(true);
  }, [message]);

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
      autoHideDuration={8000}
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

export default SnackbarComponent;
