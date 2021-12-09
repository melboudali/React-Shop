import React, { useState, useRef } from 'react';
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
  item: { firstImageUrl, secondImageUrl, thirdImageUrl, fourthImageUrl }
}) => {
  const imagesUrls = [firstImageUrl, secondImageUrl, thirdImageUrl, fourthImageUrl];
  const [mainImage, setMainImage] = useState(imagesUrls[0]);
  const ref = useRef();
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  const mainImageHandler = (e, imageUrl) => {
    e.preventDefault();
    setMainImage(imageUrl);
  };

  const mainImageZoom = e => {
    e.preventDefault();
    setScreenX(((e.pageX - ref.current.offsetTop) / ref.current.clientHeight) * 70);
    setScreenY(((e.pageY - ref.current.offsetLeft) / ref.current.clientWidth) * 70);
  };

  return (
    <Container>
      <ImagesContainer>
        <MainImageContainer>
          <MainImage
            ref={ref}
            src={mainImage}
            onMouseMove={mainImageZoom}
            screenX={screenX}
            screenY={screenY}
          />
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

ImagesViewer.propTypes = {
  firstImageUrl: PropTypes.string,
  secondImageUrl: PropTypes.string,
  thirdImageUrl: PropTypes.string,
  fourthImageUrl: PropTypes.string
};

export default ImagesViewer;
