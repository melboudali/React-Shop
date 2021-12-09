import React from 'react';
import { ArrowContainer, SvgIcon } from './Arrow.Style';
import PropTypes from 'prop-types';

const Arrow = ({ direction, nextSlide, prevSlide }) => (
  <ArrowContainer direction={direction} onClick={direction === 'left' ? prevSlide : nextSlide}>
    <SvgIcon viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
      <path
        d={
          direction === 'left'
            ? 'M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z'
            : 'M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z'
        }
      />
    </SvgIcon>
  </ArrowContainer>
);

Arrow.propTypes = {
  direction: PropTypes.string,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func
};

export default Arrow;
