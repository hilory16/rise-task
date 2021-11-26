import React, { Component } from 'react';
import Slider from 'react-slick';
import Testimony from 'components/Testimony';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimoniesWrapper } from './testimonies.style';

export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows:false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      variableWidth:true,
      centerMode: true,
    };
    return (
      <TestimoniesWrapper>
        <div className="text-content">
          <h2>From The People Who Use Rise</h2>
          <p className="testimony-desc">
            Our mission at Risevest is to empower more people just like you to achieve your personal
            financial goals.
          </p>
        </div>
        <div className="testimonies">
          <Slider {...settings}>
            <Testimony />
            <Testimony />
            <Testimony />
            <Testimony />
          </Slider>
        </div>
      </TestimoniesWrapper>
    );
  }
}
