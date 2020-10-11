import React, { useState } from 'react';
import {
  Container,
  ImagesContainer,
  MainImageContainer,
  OtherImagesContainer,
  OtherImageContainer,
  MainImage,
  OtherImage
} from './Product.Style';
import PropTypes from 'prop-types';

const ImagesViewer = ({
  item: {
    id,
    name,
    description,
    colors,
    size,
    oldPrice,
    newPrice,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    fourthImageUrl,
    rate,
    orders
  }
}) => {
  const imagesUrls = [firstImageUrl, secondImageUrl, thirdImageUrl, fourthImageUrl];
  const [mainImage, setMainImage] = useState(imagesUrls[0]);

  const mainImageHandler = (e, imageUrl) => {
    e.preventDefault();
    setMainImage(imageUrl);
  };

  return (
    <Container>
      <ImagesContainer>
        <MainImageContainer>
          <MainImage src={mainImage} />
        </MainImageContainer>
        <OtherImagesContainer>
          {imagesUrls.map((imageUrl, id) => (
            <OtherImageContainer key={id}>
              <OtherImage src={imageUrl} onMouseEnter={e => mainImageHandler(e, imageUrl)} />
            </OtherImageContainer>
          ))}
        </OtherImagesContainer>
      </ImagesContainer>
    </Container>
  );
};

ImagesViewer.propTypes = {};

export default ImagesViewer;
