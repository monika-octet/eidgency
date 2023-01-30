import React, { FC, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Autoplay } from 'swiper'
import Type_txt from './TypeTxt'

const Intro: FC = () => {
  const [progress, setProgress] = useState(0)

  const services = [
    'programmatic',
    'supply & demand',
    'marketing',
    'design ux & ui',
    'web 3 development',
    'buy & sell ads',
    'branding & design',
    'web 2 development'
  ]

  return (
    <Parallax
      onProgressChange={(progress) => setProgress(Math.floor(progress * 100))}>
      <section id="intro" className="lg:pb-52 container">
        <div className="relative min-h-[150px]">
          {/* <p
            // avgTypingDelay={25}
            // cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            className="text-37x font-medium lg:text-64x text-blue pb-10"
          >
            We are a media agnecy that enables advertising and design for the new era of the internet.
          </p> */}
          <Type_txt
            className="text-37x font-medium lg:text-64x text-blue pb-10"
            txt="We are a creative media agency that enables advertising, design & development for the new era of the internet."
            typeSpeed={24}
            delay={1500}
          />
        </div>
        <div className="animate-in-content">
          <ParallaxBanner className="my-10 h-[200px] lg:h-[500px]">
            <div className=" h-[200px] lg:h-[500px]">
              <StaticImage
                className="!absolute w-full left-0 top-0"
                src="../images/intro_bg.png"
                alt="computer_img"
                placeholder="blurred"
                layout="fullWidth"
                quality={100}
              />
              {/* <StaticImage
              className="!absolute w-[97%] left-[3%] top-2"
              src="../images/intro_bg2.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            ></StaticImage> */}
              <div className="!absolute w-full h-[80%] sm:h-[95%] lg:h-full bg-blue custom-img-wrapper">
                <Parallax translateY={[-100, 100]}>
                  <div className="w-[100%] h-[200px] lg:h-[200%]  pl-6 ">
                    <StaticImage
                      src="../images/intro_banner.png"
                      alt="computer_img"
                      placeholder="blurred"
                      loading="eager"
                      layout="fullWidth"
                    />
                  </div>
                </Parallax>
              </div>
              {/* <StaticImage
              className="!absolute w-[96%] left-[4%] top-6"
              src="../images/intro_banner.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            /> */}

              <ImgStats progress={progress} />
            </div>
          </ParallaxBanner>

          <div className="flex flex-col xl:flex-row container lg:gap-10">
            <div className="relative w-full h-[200px] lg:h-[400px] flex items-center grow min-w-[50%] lg:min-w-[60%]">
              <Swiper
                direction={'vertical'}
                slidesPerView={3}
                // pagination={{
                //   clickable: true,
                // }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper-text h-full !mr-auto !ml-0"
                breakpoints={{
                  1024: {
                    slidesPerView: 3
                  }
                }}>
                {services.map((service, index) => (
                  <SwiperSlide
                    key={service}
                    className="flex flex-col items-center ">
                    <p className="secondary-font text-24x lg:text-52x mr-auto text-blue">
                      {service}
                    </p>
                    <ListUnderline />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="py-10 grow-0 shrink flex flex-col justify-center">
              <p className="text-24x lg:text-24x !leading-9	text-blue">
                {` We’re a global creative & media agency. We leverage our
                expertise across a number of disciplines and we’ll partner with
                you to ensure you have a seamless end to end digital experience,
                no matter where you are in your journey. The future of the
                internet is now, don’t get left behind.`}
              </p>
            </div>
          </div>
          <ul className="lg:mt-24 pb-24 lg:mb-0 pl-2 flex flex-col lg:flex-row gap-6 justify-between text-22x font-bold text-blue">
            <li className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9V9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
                  fill="#232646"
                />
              </svg>
              <p>30+ people strong</p>
            </li>
            <li className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.55502 4.4551C6.99913 3.011 8.95775 2.19971 11 2.19971C13.0423 2.19971 15.0009 3.011 16.445 4.4551C17.8891 5.8992 18.7004 7.85783 18.7004 9.9001C18.7004 11.9424 17.8891 13.901 16.445 15.3451L11 20.7901L5.55502 15.3451C4.83993 14.6301 4.27268 13.7812 3.88567 12.8469C3.49866 11.9127 3.29947 10.9113 3.29947 9.9001C3.29947 8.88885 3.49866 7.88751 3.88567 6.95326C4.27268 6.019 4.83993 5.17012 5.55502 4.4551V4.4551ZM11 12.1001C11.5835 12.1001 12.1431 11.8683 12.5557 11.4557C12.9682 11.0432 13.2 10.4836 13.2 9.9001C13.2 9.31662 12.9682 8.75704 12.5557 8.34446C12.1431 7.93188 11.5835 7.7001 11 7.7001C10.4165 7.7001 9.85697 7.93188 9.44439 8.34446C9.03181 8.75704 8.80002 9.31662 8.80002 9.9001C8.80002 10.4836 9.03181 11.0432 9.44439 11.4557C9.85697 11.8683 10.4165 12.1001 11 12.1001Z"
                  fill="#232646"
                />
              </svg>

              <p>London head office</p>
            </li>
            <li className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-0.5">
                <path
                  d="M10.707 2.29303C10.5195 2.10556 10.2651 2.00024 9.99998 2.00024C9.73482 2.00024 9.48051 2.10556 9.29298 2.29303L2.29298 9.29303C2.11082 9.48163 2.01003 9.73423 2.01231 9.99643C2.01458 10.2586 2.11975 10.5094 2.30516 10.6948C2.49057 10.8803 2.74138 10.9854 3.00358 10.9877C3.26578 10.99 3.51838 10.8892 3.70698 10.707L3.99998 10.414V17C3.99998 17.2652 4.10534 17.5196 4.29287 17.7071C4.48041 17.8947 4.73476 18 4.99998 18H6.99998C7.2652 18 7.51955 17.8947 7.70709 17.7071C7.89462 17.5196 7.99998 17.2652 7.99998 17V15C7.99998 14.7348 8.10534 14.4805 8.29287 14.2929C8.48041 14.1054 8.73476 14 8.99998 14H11C11.2652 14 11.5196 14.1054 11.7071 14.2929C11.8946 14.4805 12 14.7348 12 15V17C12 17.2652 12.1053 17.5196 12.2929 17.7071C12.4804 17.8947 12.7348 18 13 18H15C15.2652 18 15.5196 17.8947 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5094 10.8803 17.6948 10.6948C17.8802 10.5094 17.9854 10.2586 17.9877 9.99643C17.9899 9.73423 17.8891 9.48163 17.707 9.29303L10.707 2.29303Z"
                  fill="#232646"
                />
              </svg>

              <p>Remote ready</p>
            </li>
            <li className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.58606L8 5.58606V18.4141L12 14.4141V1.58606ZM3.707 3.29306C3.56715 3.15325 3.38898 3.05804 3.19503 3.01948C3.00108 2.98091 2.80005 3.00071 2.61735 3.07638C2.43465 3.15205 2.27848 3.28019 2.1686 3.4446C2.05871 3.60901 2.00004 3.80231 2 4.00006V14.0001C2.00006 14.2653 2.10545 14.5196 2.293 14.7071L6 18.4141V5.58606L3.707 3.29306ZM17.707 5.29306L14 1.58606V14.4141L16.293 16.7071C16.4329 16.8469 16.611 16.9421 16.805 16.9806C16.9989 17.0192 17.2 16.9994 17.3827 16.9237C17.5654 16.8481 17.7215 16.7199 17.8314 16.5555C17.9413 16.3911 18 16.1978 18 16.0001V6.00006C17.9999 5.73486 17.8946 5.48055 17.707 5.29306Z"
                  fill="#232646"
                />
              </svg>

              <p>Flexible working models</p>
            </li>
            <li className="flex gap-[4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative top-0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM4.332 8.027C4.70329 6.96372 5.36579 6.0261 6.244 5.321C6.512 5.73 6.974 6 7.5 6C7.89782 6 8.27936 6.15804 8.56066 6.43934C8.84196 6.72064 9 7.10218 9 7.5V8C9 8.53043 9.21071 9.03914 9.58579 9.41421C9.96086 9.78929 10.4696 10 11 10C11.5304 10 12.0391 9.78929 12.4142 9.41421C12.7893 9.03914 13 8.53043 13 8C12.9998 7.55242 13.1498 7.11773 13.4259 6.76547C13.702 6.41321 14.0883 6.16375 14.523 6.057C15.4773 7.14867 16.0022 8.55002 16 10C16 10.34 15.972 10.675 15.917 11H15C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13V15.197C12.0883 15.7245 11.0533 16.0015 10 16V14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 11.7893 6.58579 11.4142C6.21071 11.0391 6 10.5304 6 10C6.00018 9.527 5.83271 9.06924 5.52733 8.70803C5.22195 8.34681 4.79844 8.10552 4.332 8.027Z"
                  fill="#232646"
                />
              </svg>
              <p>Hubs in Paris & Prague</p>
            </li>
          </ul>
        </div>
      </section>
    </Parallax>
  )
}

const ListUnderline = () => (
  <span className="line h-[1px] bg-black w-[266px] block mt-2 mr-auto transition-all ease-out duration-500" />
)

const ImgStats = ({ progress }: { progress: number }) => (
  <div className="absolute z-50 inset-0 px-10 lg:px-20 py-4 lg:pb-6 lg:pt-16">
    <div className="text-primary flex flex-col h-full">
      <div className="flex mr-auto p-1 lg:p-4 gap-4 ">
        <span className="text-xs lg:text-5xl secondary-font">NEW</span>
        <span
          style={{ width: `${progress * 4}px` }}
          className="bg-primary transition-all ease-in-out h-[13px] lg:h-[36px]"
        />
      </div>

      <div className="mt-6 lg:mt-28 ml-auto flex p-1 lg:p-4  gap-4 ">
        <span
          style={{ width: `${progress * 3}px` }}
          className="bg-primary transition-all ease-in-out h-[13px] lg:h-[36px]"
        />
        <span className="text-xs lg:text-5xl secondary-font">ERA</span>
      </div>
      {/* <div className="mt-10 lg:mt-0 mr-auto flex flex-col backdrop-blur-md gap-1">
        <div className="border-[1px] border-primary h-[10px] lg:h-[23px] w-[150px]">
          <span style={{ width: `${progress}%` }} className="bg-primary h-full block transition-all ease-in-out" />
        </div>
        <span className="secondary-font uppercase text-[7px] lg:text-[10px]">New update</span>
      </div> */}
    </div>
  </div>
)

export default Intro
