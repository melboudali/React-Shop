import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './SubmitButton.scss';

function SubmitButton({ children, ...moreProps }) {
  return (
    <Button className='SubmitButton' {...moreProps}>
      {children}
    </Button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubmitButton;
