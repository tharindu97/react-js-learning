import React, { Component } from 'react';
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './style.scss';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

export default class SliderCustom extends Component {
  componentDidMount() {
    this.mySwiper = new Swiper('.banner-slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 3600,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}"></span>`;
        },
      },
    });
  }

  render() {
    return (
      <div className="swiper-container banner-slider">
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          {this.props.children.map((slide, index) => (
            <div key={index} className="swiper-slide">
              {slide}
            </div>
          ))}
        </div>
        {/* <!-- If we need pagination --> */}
        <div className="swiper-pagination" />
      </div>
    );
  }
}
