import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectAllCollections } from '../../../Redux/Shop/ShopSelectors';
import CollectionsContainer from './CollectionsContainer/CollectionsContainer';
import PropTypes from 'prop-types';

const Collections = ({ AllCollections }) => (
  <div style={{ width: '100%' }}>
    {AllCollections.map(({ id, ...AllCollections }) => (
      <CollectionsContainer key={id} {...AllCollections} />
    ))}
  </div>
);

Collections.propTypes = {
  AllCollections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  AllCollections: SelectAllCollections
});

export default connect(mapStateToProps)(Collections);
