import React, { FC, useEffect, useRef, useState } from 'react'
import { ContentInnerType, WebContent } from './WebIntro'
import Tilt from 'react-parallax-tilt'
import { StaticImage } from 'gatsby-plugin-image'
import { Parallax } from 'react-scroll-parallax'
import { handleScroll } from '../tools/scroll-function'

interface Props {
  animationStart: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Web3: FC<Props> = ({ animationStart, setVisible }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [glithStyle, setGlithStyle] = useState({ opacity: 1 })
  const [showContent, setShowContent] = useState(false)
  const [showOrb, setShowOrb] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)

  const content = {
    content: 'In this service pillar we cover everything from;',
    list: [
      'NFT creation, marketing & launch packages',
      'NFT marketplace development',
      'NFT gated Ecommerce platforms',
      'Smart contract development',
      'Community building & management',
      'Tokenomics',
      'Metaverse design & development services'
    ],
    contact: {
      title: 'Chat with Morgs',
      href: '#lets-talk'
    }
  }

  useEffect(() => {
    if (animationStart) showAnimation()
  }, [animationStart])

  useEffect(() => {
    if (videoRef.current) videoRef.current.play()
    if (videoRef2.current) videoRef2.current.play()
  }, [])

  const showAnimation = () => {
    // show animation
    setTimeout(() => {
      setGlithStyle({
        opacity: 0
      })
      setTimeout(() => setShowContent(true), 500)
    }, 2000)
    setTimeout(() => setShowOrb(true), 2500)

    setTimeout(() => {
      document.body.style.overflow = 'auto'
      document.documentElement.style.scrollBehavior = 'smooth'
      setVisible(false)
    }, 3000)
  }

  return (
    <section
      ref={containerRef}
      id="web3"
      className={` text-white bg-[#151315] flex flex-col justify-center relative overflow-hidden`}>
      <div
        style={glithStyle}
        className={`absolute inset-0 w-full h-full flex justify-center transition-all ease-in-out duration-500 ${
          showContent ? 'hidden' : ''
        }`}>
        <div
          className={`absolute top-0 z-50 w-full h-full ${
            animationStart ? 'opacity-100' : 'opacity-0'
          } transition-opacity ease-in-out`}>
          <div className="relative min-h-screen h-full min-w-screen overflow-hidden">
            <video
              ref={videoRef}
              autoPlay={true}
              muted
              playsInline
              loop={true}
              preload="auto"
              className="primary-video">
              <source src="../video/glitch.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <h2
          className="glitch loop text-[80px] lg:text-108x relative z-50"
          data-text="WEB.3">
          WEB.3
        </h2>
      </div>
      <video
        ref={videoRef2}
        autoPlay={true}
        muted
        playsInline
        loop={true}
        preload="auto"
        className={`secondary-video ${
          showOrb ? 'left opacity-100' : 'opacity-0'
        } z-10 `}>
        <source src="../video/shape.mp4" type="video/mp4" />
      </video>

      <div className={`container relative h-full mt-[150px] lg:mt-0`}>
        <div
          className={` justify-center z-50 h-full   ${
            showContent ? 'opacity-100' : 'opacity-0'
          } transition-all ease-in-out duration-500`}>
          <div className="pt-16 pb-20 lg:pt-32 lg:pb-36 flex flex-col">
            <div className="flex flex-col relative  z-20">
              <span className="primary-label mb-10 mr-auto mx-auto ">
                Web 3.0
              </span>
              <h2 className="text-2xl lg:text-6xl font-normal text-center mx-auto mb-12 lg:mb-20 uppercase secondary-font">
                All encompassing Web <br />{' '}
                <span className="text-primary">3.0</span> services
              </h2>
            </div>

            <div className="flex lg:grid lg:grid-cols-2 justify-center gap-8">
              <div />
              <div
                className={`flex flex-col relative  ${
                  showContent ? 'left-0' : '-left-[20px]'
                } transition-all ease-in-out duration-500`}>
                <ul className="text-24x lg:text-32x mb-6 ">
                  {content.list.map((item, index) => (
                    <li className="py-1.5 lg:py-2" key={index}>
                      <span className="pr-4 font-semibold text-primary">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="primary-btn !bg-primary !text-blue"
                  href={content.contact.href}>
                  Learn more
                </a>
              </div>
              {/* <div className="px-10 lg:mb-10 lg:ml-autoh ">
                <Tilt className="mx-auto w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] layerd-tilt max-w-full">
                  <StaticImage
                    className="absolute w-full left-2 top-2 layer-1"
                    src="../images/web3_bg.png"
                    alt="computer_img"
                    placeholder="blurred"
                    layout="fullWidth"
                  />

                  <StaticImage
                    className="absolute w-full layer-2 "
                    src="../images/web3.webp"
                    alt="computer_img"
                    placeholder="blurred"
                    layout="fullWidth"
                  />

                  <div className="absolute layer-3 flex flex-col justify-between h-full w-full pt-10 pb-20">
                    <div className="p-2 bg-blue/90 uppercase secondary-font text-26x mr-auto">
                      <span>Creativity with</span>
                    </div>
                    <div className="p-2 bg-blue/90 uppercase secondary-font text-26x ml-auto">
                      <span>WEB 3.0</span>
                    </div>
                  </div>
                </Tilt>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Web3
