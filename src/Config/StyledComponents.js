const size = {
  esmall: '576px',
  small: '576px',
  medium: '768px',
  large: '992px',
  elarge: '1200px'
};

const MediaQueries = {
  extraSmallDevices: `@media only screen and (max-width: ${size.esmall})`,
  smallDevices: `@media only screen and (min-width: ${size.small})`,
  mediumDevices: `@media only screen and (min-width: ${size.medium})`,
  largeDevices: `@media only screen and (min-width: ${size.large})`,
  extraLargeDevices: `@media only screen and (min-width: ${size.elarge})`
};

export default MediaQueries;
