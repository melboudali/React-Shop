import React, { useState } from 'react';
import CollectionPreview from '../../Components/ShopPageComponents/CollectionPreview/CollectionPreview';
import ShopData from './ShopData';
import './Shop.scss';

const Shop = () => {
  const [shopData, ] = useState(ShopData);
  return (
    <div className='shop-page'>
      {shopData.map(({ id, ...shopData }) => (
        <CollectionPreview key={id} {...shopData} />
      ))}
    </div>
  );
};

export default Shop;
