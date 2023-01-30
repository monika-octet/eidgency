import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper'
import 'swiper/css/pagination'
import Img from 'gatsby-image'
import { StaticImage } from 'gatsby-plugin-image'
import ImageComponent from './ImageComponent'
import { slides } from '../data/projects'
import { SlideType } from '../types/projects'

const Projects = () => {
  const SwipperRef = React.useRef(null)

  return (
    <section
      id="case-studies"
      className="bg-[#151315] text-white case-studies-container">
      <div className="container-max py-16 lg:py-32 px-0">
        {/* lg:sticky */}
        <div className="lg:text-center z-30 lg:mb-10 top-[60px] px-[16px]">
          <h2 className="text-64x lg:text-108x mb-6 lg:mb-8 ">
            We've done this before.
          </h2>
          <p className="text-24x">Check out some of our work. </p>
        </div>
        <div className="py-10">
          <Swiper
            direction={'horizontal'}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 'auto',
                direction: 'vertical',
                centeredSlides: true
              }
            }}
            scrollbar={{ snapOnRelease: true, draggable: true }}
            spaceBetween={9}
            allowTouchMove={true}
            mousewheel={{
              releaseOnEdges: true,
              sensitivity: 1,
              thresholdDelta: 1
            }}
            pagination={{
              clickable: true
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper h-full lg:max-h-[800px] !px-[24px] !pb-[50px] !lg:pb-0">
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Slide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

interface SlideProps {
  slide: SlideType
}

const Slide = ({ slide }: SlideProps) => {
  return (
    <a href={slide.url} target="_blank">
      {/* MOBILE */}
      <div className="md:hidden h-[650px]">
        <ImageComponent imageName={slide.backgorund_mobile}>
          <div className="flex flex-col justify-between h-full">
            <div className="relative ">
              <div
                className={`flex flex-col justify-start align-middle h-full px-[10px] py-[45px]  relative z-30  ${
                  slide.invert ? 'order-2' : ''
                }`}>
                <div className={slide.textInvert ? 'text-black' : ''}>
                  <h2 className="text-32x mb-4">{slide.title}</h2>
                  <p className="text-base ">{slide.description}</p>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  {slide.tags &&
                    slide.tags.map((tag) => (
                      <div
                        className={`${
                          slide.textInvert
                            ? 'text-black'
                            : 'border-primary/25 text-primary'
                        } block border rounded-xl px-2 uppercase secondary-font mr-auto leading-6`}
                        key={tag}>
                        <span className="relative top-0.5">{tag}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div
              className="absolute w-full bottom-0 z-20 px-2  max-w-[450px]"
              style={{ left: '50%', transform: 'translatex(-50%)' }}>
              {slide.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover mb-6 rounded-2xl">
                  <source src={slide.video} type="video/mp4" />
                </video>
              ) : (
                <>
                  <ImageComponent imageName={slide.img_mobile} />
                </>
              )}
            </div>
          </div>
        </ImageComponent>
      </div>

      {/* DESKTOP */}

      <div className="hidden md:block">
        <ImageComponent imageName={slide.background}>
          <div className="relative h-full lg:grid lg:grid-cols-2 w-full lg:h-[400px]">
            <div
              className={`flex flex-col justify-center align-middle h-full px-[40px] py-[20px] lg:px-[50px] relative z-30 lg:max-w-[85%] ${
                slide.invert ? 'order-2' : ''
              }`}>
              <div className={slide.textInvert ? 'text-black' : ''}>
                <h2 className="text-52x mb-4">{slide.title}</h2>
                <p className="text-lg ">{slide.description}</p>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                {slide.tags &&
                  slide.tags.map((tag) => (
                    <div
                      className={`${
                        slide.textInvert
                          ? 'text-black'
                          : 'border-primary/25 text-primary'
                      } block border rounded-xl px-2 uppercase secondary-font mr-auto leading-6`}
                      key={tag}>
                      <span className="relative top-0.5">{tag}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="lg:absolute w-full h-[400px lg:h-full lg:w-[70%] top-0 lg:right-0 z-20">
            {slide.video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[60%] h-[80%] object-cover ml-auto mr-[20px] mt-[40px] rounded-2xl">
                <source src={slide.video} type="video/mp4" />
              </video>
            ) : (
              <>
                {/* <Img style={{ width: "100%", height: "100%" }} fluid={image} /> */}
                <ImageComponent imageName={slide.img} />
              </>
            )}
          </div>
        </ImageComponent>
      </div>
    </a>
  )
}

export default Projects
