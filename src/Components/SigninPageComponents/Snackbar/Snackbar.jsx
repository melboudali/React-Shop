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
      autoHideDuration={6000}
      onClose={handleClose}
      message={
        <div className='ErrorMessage'>
          <i className='fad fa-times-circle errorIcon' />
          {`${message}`}
        </div>
      }
      action={
        <div className='CloseBtn' onClick={handleClose}>
          <i className='fal fa-times' />
        </div>
      }
    />
  );
};

SnackbarComponent.propTypes = { message: PropTypes.string };

export default SnackbarComponent;
