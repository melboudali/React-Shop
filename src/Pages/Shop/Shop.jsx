import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCollection } from '../../Redux/Shop/ShopSelectors';
import CollectionPreview from '../../Components/ShopPageComponents/CollectionPreview/CollectionPreview';
import './Shop.scss';

const Shop = ({ Collection }) => {
  return (
    <div className='shopPage'>
      {Collection.map(({ id, ...Collection }) => (
        <CollectionPreview key={id} {...Collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Collection: SelectCollection
});

export default connect(mapStateToProps)(Shop);
