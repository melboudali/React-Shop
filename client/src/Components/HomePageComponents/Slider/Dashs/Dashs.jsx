import React from 'react';
import { DashContainer, Dash } from './Dashs.Style';
import PropTypes from 'prop-types';

const Dashes = ({ Images, CurrentIndex, setCurrentIndex, setTranslate, width }) => (
  <DashContainer>
    {Images.map((Image, i) => (
      <Dash
        key={i}
        active={CurrentIndex === i}
        onClick={() => {
          setCurrentIndex(i);
          setTranslate(width * i);
        }}
      />
    ))}
  </DashContainer>
);

Dashes.prototype = {
  Images: PropTypes.array.isRequired,
  CurrentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  setTranslate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export default Dashes;
