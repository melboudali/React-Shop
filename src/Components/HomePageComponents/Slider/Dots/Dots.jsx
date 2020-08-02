import React from 'react';
import { DotsContainer, Dot } from './Dots.Style';
import PropTypes from 'prop-types';

const Dots = ({ Images, CurrentIndex, setCurrentIndex, setTranslate, width }) => (
  <DotsContainer>
    {Images.map((Image, i) => (
      <Dot
        key={i}
        active={CurrentIndex === i}
        onClick={() => {
          setCurrentIndex(i);
          setTranslate(width * i);
        }}
      />
    ))}
  </DotsContainer>
);

Dots.prototype = {
  Images: PropTypes.array.isRequired,
  CurrentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  setTranslate: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired
};

export default Dots;
