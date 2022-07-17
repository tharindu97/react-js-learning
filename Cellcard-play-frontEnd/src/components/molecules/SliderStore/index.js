/*
 * Author: Jerobert (zjerobert@mitrai.com)
 * Date: Wednesday, 9th September 2020 11:30 am
 * Module: Cellcard Play Frontend
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

import React, { Component } from 'react';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { Image, Spinner } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';

import './style.scss';
import api from 'api';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

export default class SliderStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    api.content.getStoreSliderImages().then((res) => {
      this.setState({
        photos: res.data,
        loading: false,
      });
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
    });
  }

  render() {
    const { photos, loading } = this.state;
    return (
      <div className="store-slider-container">
        {loading && (
          <div className=" d-flex justify-content-center pt-5">
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        <div className="swiper-container banner-slider">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            {photos.map((image) => (
              <div key={image.image} className="swiper-slide">
                <Image src={image.image} alt={image.alt} />
              </div>
            ))}
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
}
