import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollectionPreview } from '../../../Redux/Shop/ShopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import PropTypes from 'prop-types';

const CollectionOverview = ({ Collections }) => (
  <div style={{ width: '100%' }}>
    {Collections.map(({ id, ...Collections }) => (
      <CollectionPreview key={id} {...Collections} />
    ))}
  </div>
);

CollectionOverview.propTypes = {
  Collections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  Collections: SelectCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverview);
