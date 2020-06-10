import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='formInput' onChange={handleChange} {...otherProps} autoComplete="on" required/>
      {label ? <label className={`${value ? 'shrink' : ''} formInputLabel`}>{label}</label> : null}
    </div>
  );
};

FormInput.propTypes = {};

export default FormInput;
