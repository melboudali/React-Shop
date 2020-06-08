import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className='group'>
      <input type='text' className='formInput' onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} formInputLabel`}>{label}</label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {};

export default FormInput;
