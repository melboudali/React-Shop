import React from 'react';
import Button from '@material-ui/core/Button';
import './SubmitButton.scss';
import PropTypes from 'prop-types';

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
