import React from 'react';
import { Group, Input, InputLabel } from './FormInput.Style';
import PropTypes from 'prop-types';

const FormInput = ({ handleChange, label, value, id, autoComplete, ...otherProps }) => (
  <Group title={label}>
    <Input value={value} onChange={handleChange} autoComplete={autoComplete} {...otherProps} />
    {label && (
      <InputLabel htmlFor={id} value={value}>
        {label}
      </InputLabel>
    )}
  </Group>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default FormInput;
