import React, { FC, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
// import ReactCardFlip from "react-card-flip"
import { Navigation } from 'swiper'

import { StaticImage } from 'gatsby-plugin-image'
import { SlidesTYPE } from './ProjectsOld'
import 'swiper/css/navigation'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Primary_swiper: FC = () => {
  const slides = [
    {
      title: '',
      img: 'alex',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'nokPay',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'alkimi.org',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'labs.alkimi',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'cozyKids',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'jacob',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    },
    {
      title: '',
      img: 'nft',
      content: 'Lorem ipsum dolor sit amet, consectetur '
    }
  ]

  const query = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="primary-swiper-container relative w-full overflow-hidden ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.3}
          pagination={true}
          loop={true}
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          }}
          className="mySwiper !-my-[150px] lg:!-my-[100px] oval-swiper"
          // style={{ overflow: "auto" }}
          modules={[Navigation]}
          breakpoints={{
            1024: {
              spaceBetween: 50,
              slidesPerView: 1.5
            }
          }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Swiper_Slide
                key={index}
                slide={slide}
                image={
                  query.allFile.edges.find(
                    (edge) => edge.node.name === slide.img
                  ).node.childImageSharp.fluid
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-btn-container relative z-50 bottom-8 xl:bottom-[180px] w-full flex justify-center gap-[21px] ">
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </div>
    </>
  )
}

const Swiper_Slide = ({ slide, image }: { slide: any; image: any }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  // class="hover:opacity-80 opacity-100 transition-all"

  //isFlipped={isFlipped} flipDirection="horizontal"
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div
          onClick={() => setIsFlipped(true)}
          className="relative flip-card-front">
          <Img
            className="absolute inset-0 w-full h-full"
            fluid={image}
            alt="computer_img"
          />
        </div>

        <div
          onClick={() => setIsFlipped(false)}
          className=" flip-card-back flex flex-col justify-center items-center bg-blue">
          <Img
            className="absolute inset-0 w-full h-full opacity-0"
            fluid={image}
            alt="computer_img"
          />

          <p className="absolute text-center text-white text-32x">
            {slide.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Primary_swiper
