import React from 'react';
import { Group, Input, InputLabel } from './FormInput.Style';
import PropTypes from 'prop-types';

const FormInput = ({ id, label, value, handleChange, ...others }) => (
  <Group title={label}>
    <Input id={id} label={label} value={value} onChange={handleChange} {...others} />
    {label && (
      <InputLabel htmlFor={id} value={value}>
        {label}
      </InputLabel>
    )}
  </Group>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default FormInput;
