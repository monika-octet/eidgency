import * as React from "react"
import { Founder } from "./Founders"
import { BsTwitter, BsLinkedin } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"

interface Founder_cardProps {
  founder: Founder
  reverse: boolean
}

const Founder_card: React.FC<Founder_cardProps> = ({ founder, reverse }) => {
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([0, 0])

  useEffect(() => {
    const { innerWidth, innerHeight } = window

    const handleWindowMouseMove = (event: any) => {
      const { clientX, clientY } = event
      const coordinatesX = ((clientX / innerWidth) * 100) / 3 - 10
      const coordinatesY = ((clientY / innerHeight) * 100) / 3 - 10

      setManualTiltAngle([coordinatesX, coordinatesY])
    }

    window.addEventListener("mousemove", handleWindowMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
    }
  }, [])

  const getCorrectImg = () => {
    switch (founder.name) {
      case "Paul Dimmock":
        return <Paul manualTiltAngleX={manualTiltAngleX} manualTiltAngleY={manualTiltAngleY} />
      case "Georges Tertois":
        return <Georges manualTiltAngleX={manualTiltAngleX} manualTiltAngleY={manualTiltAngleY} />
      case "Morgan Selbekk":
        return <Morgan manualTiltAngleX={manualTiltAngleX} manualTiltAngleY={manualTiltAngleY} />
      default:
        return null
    }
  }

  const IMGContainer = getCorrectImg()

  return (
    <div
      className={`text-white -tracking-[0.01em] 2xl:flex ${reverse && "2xl:flex-row-reverse"}`}
      style={{ backgroundColor: founder.color }}
    >
      <div className={`grow w-full 2xl:min-w-[560px] 2xl:flex 2xl:flex-col 2xl:justify-between`}>
        <div className="relative w-full py-8 2xl:px-8">{IMGContainer}</div>

        <div className="flex justify-center py-6 border-y border-[#474747] 2xl:border-b-0 text-primary h-[74px]">
          <a href={founder.social.twitter} target="_blank" rel="noreferrer">
            <BsTwitter className="text-2xl" />
          </a>
          <a href={founder.social.linkedin} target="_blank" rel="noreferrer">
            <BsLinkedin className="text-2xl ml-4" />
          </a>
        </div>
      </div>
      <div className={`2xl:flex 2xl:flex-col 2xl:justify-between ${reverse ? "2xl:border-r" : "2xl:border-l"} border-[#474747]`}>
        <div className="py-[24px] px-3 lg:px-12">
          <span className="bg-primary text-black font-semibold py-1 px-5 text-xl inline-block mb-2">{founder.title}</span>
          <h2 className="text-[44px] leading-[51px] lg:text-6xl  mb-2 lg:mb-4">{founder.name}</h2>
          <div className="text-xl lg:text-[30px] leading-[35px] flex flex-col gap-10 opacity-80 ">
            {founder.about.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 mb-[40px] 2xl:mb-0 2xl:mt-32">
            <h3 className="text-6xl">{founder.experience.time}</h3>
            <p className="text-xl ">Years of experience</p>
          </div>
        </div>

        <ul className="flex gap-[43px] border-t border-[#474747] px-3 lg:px-12 py-[18px] items-center flex-wrap lg:h-[74px]">
          {founder.experience.companies.map((company, index) => (
            <img className="max-w-[132px] max-h-[37px] h-full" src={`/image/logos/${company}.png`} alt={company} />
          ))}
        </ul>
      </div>
    </div>
  )
}

interface IMGPROPS {
  manualTiltAngleX: number
  manualTiltAngleY: number
}

import Tilt from "react-parallax-tilt"
import { useEffect, useState } from "react"

const Morgan: React.FC<IMGPROPS> = ({ manualTiltAngleX, manualTiltAngleY }) => (
  <Tilt
    tiltAngleXManual={manualTiltAngleY}
    tiltAngleYManual={manualTiltAngleX}
    className="mx-auto max-w-[250px] h-[400px] lg:max-w-[400px] lg:h-[600px] layerd-tilt w-full"
  >
    <StaticImage
      className="!absolute w-full left-2 top-2 layer-1"
      src="../images/founders/people/paul_1.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full left-2 top-2 layer-2"
      src="../images/founders/people/morgan_1.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full top-0 layer-3 "
      src="../images/founders/people/morgan.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />
  </Tilt>
)
const Georges: React.FC<IMGPROPS> = ({ manualTiltAngleX, manualTiltAngleY }) => (
  <Tilt
    tiltAngleXManual={manualTiltAngleY}
    tiltAngleYManual={manualTiltAngleX}
    className="mx-auto max-w-[250px] h-[400px] lg:max-w-[400px] lg:h-[600px] layerd-tilt w-full"
  >
    <StaticImage
      className="!absolute w-full left-2 top-2 layer-1"
      src="../images/founders/people/back.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full left-2 top-2 layer-2"
      src="../images/founders/people/george_2.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full top-0 layer-3 "
      src="../images/founders/people/george.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />
  </Tilt>
)
const Paul: React.FC<IMGPROPS> = ({ manualTiltAngleX, manualTiltAngleY }) => (
  <Tilt
    tiltAngleXManual={manualTiltAngleY}
    tiltAngleYManual={manualTiltAngleX}
    className="mx-auto max-w-[250px] h-[400px] lg:max-w-[400px] lg:h-[600px] layerd-tilt w-full"
  >
    <StaticImage
      className="!absolute w-full left-2 top-2 layer-1"
      src="../images/founders/people/back.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full left-2 top-2 layer-2"
      src="../images/founders/people/paul_1.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />

    <StaticImage
      className="!absolute w-full top-0 layer-3 "
      src="../images/founders/people/paul.png"
      alt="computer_img"
      placeholder="blurred"
      layout="fullWidth"
      quality={100}
    />
  </Tilt>
)

export default Founder_card
