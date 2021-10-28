import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  //console.log(length);

  const nextSlide = () => {
    return setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    return setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [current, length]);

  console.log(current);
  return (
    <section className='slider'>
      <FaArrowCircleLeft onClick={prevSlide} className='left-arrow' />
      <FaArrowCircleRight onClick={nextSlide} className='right-arrow' />
      {SliderData.map((slide, index) => {
        return (
          <div key={index} className='slide'>
            {current === index && (
              <img src={slide.image} alt='food' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
