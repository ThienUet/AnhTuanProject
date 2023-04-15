import React from 'react'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import CustomImage from '@/components/CustomImage/Image';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const dataSlidePoster = [
    { url: '#', img_url: '/static/banner/slider1.jpg', name: 'banner' },
    { url: '#', img_url: '/static/banner/slider2.jpg', name: 'banner' },
    { url: '#', img_url: '/static/banner/slider3.jpg', name: 'banner' },
  ];
  
  const dataBannerSale = { url: '#', img_url: '/static/banner/sale.jpg', name: 'abc' };
  const dataBannerAdvertise = { url: '#', img_url: '/static/banner/sale1.jpg', name: 'abc' };

export default function Banner() {
  return (
    <div className='banner-main'>
          <div className='banner-left'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{ delay: 1000000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className='swiper-main'
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                effect='coverflow'
            >
                {dataSlidePoster && dataSlidePoster.length > 0
                ? dataSlidePoster.map((slide, key) => {
                    return (
                        <SwiperSlide key={key}>
                        <CustomImage
                            src={slide.img_url}
                            alt={slide.name}
                            loading='lazy'
                        />
                        </SwiperSlide>
                    );
                    })
                : null}
            </Swiper>
          </div>
          <div className='banner-right'>
            <div className='right-first'>
                <CustomImage src={dataBannerSale.img_url} alt={dataBannerSale.name}/>
            </div>
            <div className='right-second'>
            <CustomImage src={dataBannerAdvertise.img_url} alt={dataBannerAdvertise.name}/>
            </div>
          </div>
    </div>
  )
}
