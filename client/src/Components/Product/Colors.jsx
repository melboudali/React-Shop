import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ColorsContainer, ColorContainer } from './Product.Style';

function Colors({ colors }) {
  const [selectedColor, setSelectedColor] = useState(colors ? colors[0] : null);
  if (Colors && selectedColor) {
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
