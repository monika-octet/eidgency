import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useState } from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import Primary_swiper from './PrimarySwiper'

export type SlidesTYPE = {
  title: string
  img: {
    src: string
    alt: string
  }
  content: string
}

const Projects: FC = () => {
  const [progress, setProgress] = useState(0)

  return (
    <Parallax
      onProgressChange={(progress) => setProgress(Math.floor(progress * 100))}>
      <section id="case-studies">
        <div className="container pt-16  lg:pt-32  flex flex-col relative text-blue">
          <h2 className="text-64x lg:text-166x mb-6 lg:mb-8 ">
            We've done <br /> this before.
          </h2>
          <p className="text-24x lg:text-32x max-w-3xl">
            Check out some of our work.
          </p>
        </div>
        <div className="max-w-[1800px] mx-auto px-0 overlay-sides relative overflow-hidden">
          <Primary_swiper />
        </div>
        <div className="container pb-20 lg:pb-36">
          <h3 className="text-37x lg:text-64x mb-10 lg:mb-32 text-blue">
            We are powered by the world's first decentralized Blockchain enabled
            ad exchange
          </h3>

          <div className="lg:my-10 custom-img-wrapper !bg-blue pt-[10px] px-[10px] lg:px-[40px]">
            <div
              className="custom-img-wrapper-inner h-[200px] "
              style={{ paddingBottom: '56.66%' }}>
              {/* <ImgStats progress={progress} /> */}

              {/* <Parallax translateY={[-50, 10]}>
                <div className="w-[100%] h-[200px] lg:h-[300%]">
                  <StaticImage
                    transformOptions={{ fit: "cover" }}
                    src="../images/buildings.png"
                    alt="computer_img"
                    placeholder="blurred"
                    loading="eager"
                    layout="fullWidth"
                  />
                </div>
              </Parallax> */}
              <div className="h-full w-full">
                <iframe
                  src="https://www.youtube.com/embed/asXUrMGbPsw?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>

          <a
            href="https://www.youtube.com/embed/asXUrMGbPsw?autoplay=1"
            target="_blank"
            className="primary-btn mx-auto lg:!-mt-10">
            watch video
          </a>

          {/* <StaticImage src="../images/computer.png" alt="computer_img" placeholder="blurred" layout="fullWidth" /> */}
        </div>
      </section>
    </Parallax>
  )
}

const ImgStats = ({ progress }: { progress: number }) => (
  <div className="absolute z-50 inset-0 px-6 lg:px-20 py-4 lg:py-6">
    <div className="text-primary flex flex-col h-full">
      <div className="flex mr-auto p-1 lg:p-4 bg-blue/70 gap-4 backdrop-blur-md">
        <span className="text-xs lg:text-5xl">BLOCKCHAIN</span>
        <span
          style={{ width: `${progress * 4}px` }}
          className="bg-primary transition-all ease-in-out max-w-[150px] lg:max-w-[300px]"
        />
      </div>

      <div className="mt-16 lg:mt-36 flex justify-between">
        <div className="flex p-1 lg:p-4 bg-blue/70 gap-1 lg:gap-4 backdrop-blur-md flex-col relative -top-6 lg:-top-8">
          <span className="secondary-font uppercase text-xs lg:text-4xl">
            Ultra HD
          </span>
          <span className="secondary-font uppercase text-[6px] lg:text-xl">
            Video_tutorial included
          </span>
          <div className="flex gap-1">
            <div className=" border-[1px] lg:border-[1px] border-primary h-[5px] lg:h-[15px] w-[50px] lg:w-[100px]">
              <span
                style={{ width: `${progress <= 50 ? progress * 2 : '100%'}%` }}
                className="bg-primary h-full block transition-all ease-in-out"
              />
            </div>
            <div className=" border-[1px] lg:border-[1px] border-primary h-[5px] lg:h-[15px] w-[50px] lg:w-[100px]">
              <span
                style={{ width: `${progress >= 50 ? progress : '0%'}%` }}
                className="bg-primary h-full block transition-all ease-in-out"
              />
            </div>
          </div>
          <span className="secondary-font uppercase text-[10px]">
            New update
          </span>
        </div>
        <div className="flex p-1 lg:p-4 bg-blue/70 gap-4 backdrop-blur-md mb-auto">
          <span
            style={{ width: `${progress * 3}px` }}
            className="bg-primary transition-all ease-in-out max-w-[100px] lg:max-w-[300px]"
          />
          <span className="text-xs lg:text-5xl">ADS</span>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
