import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ handleChange, label, value, id, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='formInput'
        value={value}
        onChange={handleChange}
        autoComplete='on'
        required
        {...otherProps}
      />
      {label ? (
        <label htmlFor={id} className={`${value ? 'shrink' : ''} formInputLabel`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default FormInput;
