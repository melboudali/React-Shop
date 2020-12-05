const size = {
  esmall: '576px',
  small: '576px',
  medium: '768px',
  large: '992px',
  elarge: '1200px'
};

export const extraSmallDevices = `@media screen and (max-width: ${size.esmall})`;
export const smallDevices = `@media screen and (min-width: ${size.small})`;
export const mediumDevices = `@media screen and (min-width: ${size.medium})`;
export const largeDevices = `@media screen and (min-width: ${size.large})`;
export const extraLargeDevices = `@media screen and (min-width: ${size.elarge})`;