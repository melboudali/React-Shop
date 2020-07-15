import React from 'react';
import './FormInput.scss';
import PropTypes from 'prop-types';

const FormInput = ({ handleChange, label, value, id, ...otherProps }) => (
  <div className='Group' title={label}>
    <input
      className='FormInput'
      value={value}
      onChange={handleChange}
      autoComplete='on'
      required
      {...otherProps}
    />
    {label ? (
      <label htmlFor={id} className={`${value ? 'Shrink' : ''} FormInputLabel`}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default FormInput;
