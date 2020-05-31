import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      centerPadding: '50px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2>Offers</h2>
        <Slider {...settings}>
          <div>
            <img src="https://dummyimage.com/400x400/000/fff" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/00ff1e" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/eaff00" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/eaff11" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/00ff12" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/00fdf2" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/00f31e" alt=""/>
          </div>
          <div>
          <img src="https://dummyimage.com/400x400/000/00fe1e" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}