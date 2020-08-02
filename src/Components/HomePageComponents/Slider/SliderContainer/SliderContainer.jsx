import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Slider, SliderWrapper, SliderItem } from './SliderContainer.Style';
import Arrow from '../Arrow/Arrow';
import Dots from '../Dots/Dots';

const SliderContainer = () => {
  const SliderRef = useRef(0);
  const [getWidth, setWidth] = useState(0);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [SlideAnimation, setSlideAnimation] = useState(true);

  const Images = [
    'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1557907430-116f58e8ac28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80',
    'https://images.unsplash.com/photo-1475293831741-1b69e67acb72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
    'https://images.unsplash.com/photo-1566664022077-4dc1446dd619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80'
  ];
  const imagesLength = Images.length;

  const nextSlide = useCallback(() => {
    if (CurrentIndex === imagesLength - 1) {
      setTranslate(0);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(CurrentIndex + 1);
      setTranslate((CurrentIndex + 1) * getWidth);
    }
  }, [CurrentIndex, imagesLength, getWidth]);

  const prevSlide = () => {
    if (CurrentIndex === 0) {
      setCurrentIndex(imagesLength - 1);
      setTranslate((imagesLength - 1) * getWidth);
    } else {
      setCurrentIndex(CurrentIndex - 1);
      setTranslate((CurrentIndex - 1) * getWidth);
    }
  };

  useEffect(() => {
    setWidth(SliderRef.current.clientWidth);
    const SlideInt = SlideAnimation && setInterval(() => nextSlide(), 5000);
    return () => clearInterval(SlideInt);
  }, [SlideAnimation, nextSlide]);

  return (
    <Slider
      ref={SliderRef}
      onMouseEnter={() => setSlideAnimation(false)}
      onMouseLeave={() => setSlideAnimation(true)}>
      <SliderWrapper translate={translate} width={getWidth * imagesLength}>
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
        width={getWidth}
      />
    </Slider>
  );
};

export default SliderContainer;
