import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollectionPreview } from '../../../Redux/Shop/ShopSelectors';

import AddCollectionAndDocs from '../../../Utils/AddShopDataToFirebase';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import PropTypes from 'prop-types';

const CollectionOverview = ({ Collections }) => {
  useEffect(() => {
    // Create an scoped async function in the hook
    (async function () {
      AddCollectionAndDocs(
        'Collections',
        Collections.map(({ title, items }) => ({ title, items }))
      );
    })();
  });

  return (
    <div style={{ width: '100%' }}>
      {Collections.map(({ id, ...Collections }) => (
        <CollectionPreview key={id} {...Collections} />
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {
  Collections: PropTypes.array
};

const mapStateToProps = createStructuredSelector({
  Collections: SelectCollectionPreview
});

export default connect(mapStateToProps)(CollectionOverview);
