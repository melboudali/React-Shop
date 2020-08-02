import React, { useState, useEffect, useCallback } from 'react';
import { Slider, SliderWrapper, SliderItem } from './SliderContainer.Style';
import Arrow from '../Arrow/Arrow';
import Dots from '../Dots/Dots';

const SliderContainer = () => {
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [SlideAnimation, setSlideAnimation] = useState(true);
  const getWidth = () => window.innerWidth;

  const Images = [
    'https://images.unsplash.com/photo-1514509897857-fb32c118ca22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80',
    'https://images.unsplash.com/photo-1562478899-f8bca5c85ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1580813089076-7a92471e7074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1424&q=80',
    'https://images.unsplash.com/photo-1566664022077-4dc1446dd619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80',
    [
      'https://images.unsplash.com/photo-1577134351686-c6dca1c59964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1535&q=80'
    ]
  ];
  const imagesLength = Images.length;

  const nextSlide = useCallback(() => {
    if (CurrentIndex === imagesLength - 1) {
      setTranslate(0);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(CurrentIndex + 1);
      setTranslate((CurrentIndex + 1) * getWidth());
    }
  }, [CurrentIndex, imagesLength]);

  const prevSlide = () => {
    if (CurrentIndex === 0) {
      setCurrentIndex(imagesLength - 1);
      setTranslate((imagesLength - 1) * getWidth());
    } else {
      setCurrentIndex(CurrentIndex - 1);
      setTranslate((CurrentIndex - 1) * getWidth());
    }
  };

  useEffect(() => {
    const SlideInt = SlideAnimation && setInterval(() => nextSlide(), 4000);
    return () => clearInterval(SlideInt);
  }, [nextSlide, SlideAnimation]);

  return (
    <Slider
      onMouseEnter={() => setSlideAnimation(false)}
      onMouseLeave={() => setSlideAnimation(true)}>
      <SliderWrapper translate={translate} width={getWidth() * imagesLength}>
        {Images.map((image, id) => (
          <SliderItem key={id} content={image} />
        ))}
      </SliderWrapper>
      <Arrow direction='right' nextSlide={nextSlide} />
      <Arrow direction='left' prevSlide={prevSlide} />
      <Dots
        Images={Images}
        CurrentIndex={CurrentIndex}
        setCurrentIndex={setCurrentIndex}
        setTranslate={setTranslate}
        width={getWidth()}
      />
    </Slider>
  );
};

export default SliderContainer;
