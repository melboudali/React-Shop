import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollectionPreview } from '../../../Redux/Shop/ShopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import PropTypes from 'prop-types';
import './CollectionOverview.scss';

const CollectionOverview = ({ Collections }) => {
  return (
    <div className='CollectionOverview'>
      {Collections.map(({ id, ...Collections }) => (
        <CollectionPreview key={id} {...Collections} />
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {
  Collections: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  Collections: SelectCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverview);
