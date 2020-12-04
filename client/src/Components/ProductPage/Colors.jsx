import React, { useState } from 'react';
import { ColorsContainer, ColorContainer } from './Product.Style';
import PropTypes from 'prop-types';

function Colors({ colors, selectedColor, setSelectedColor }) {
  if (colors.length > 0) {
    return (
      <ColorsContainer>
        <span>
          Color: {typeof selectedColor === 'string' ? selectedColor.toUpperCase() : selectedColor}
        </span>
        {colors.map((color, cid) => (
          <ColorContainer
            key={cid}
            color={color}
            title={typeof color === 'string' ? color.toUpperCase() : color}
            isSelected={selectedColor === color}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ColorsContainer>
    );
  } else {
    return null;
  }
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
