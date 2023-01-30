import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { Parallax } from 'react-scroll-parallax'
export type ContentTYPE = ContentInnerType & {
  subtitle: string
  title: string
}

export type ContentInnerType = {
  content: string
  list: string[]
  contact: {
    title: string
    href: string
  }
  contentLeft?: boolean
  img: {
    src: string
    alt: string
    background: {
      src: string
      alt: string
    }
  }
}

const Web_intro: FC = () => {
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([
    0, 0
  ])

  useEffect(() => {
    const { innerWidth, innerHeight } = window

    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event: any) => {
      const { clientX, clientY } = event

      const coordinatesX = ((clientX / innerWidth) * 100) / 3 - 15
      const coordinatesY = ((clientY / innerHeight) * 100) / 3 - 15

      setManualTiltAngle([coordinatesX, coordinatesY])
    }

    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  return (
    // onMouseMove={handleMouseMove}
    <section id="web-intro" className=" z-40  overflow-hidden">
      <div className="container pt-24 pb-32 lg:py-56 gap-[100px] lg:gap-[300px] flex flex-col">
        <WebIntroItem
          manualTiltAngleX={manualTiltAngleX}
          manualTiltAngleY={manualTiltAngleY}
        />
        <WebIntroItem2
          manualTiltAngleX={manualTiltAngleX}
          manualTiltAngleY={manualTiltAngleY}
        />
      </div>
    </section>
  )
}

interface WebIntroItemProps {
  manualTiltAngleX: number
  manualTiltAngleY: number
}

const WebIntroItem: FC<WebIntroItemProps> = ({
  manualTiltAngleX,
  manualTiltAngleY
}) => {
  const [visible, setVisible] = useState(false)

  const subtitle = 'Web 2.0'
  const title = 'Programmatic advertising, blockchain enabled strategy'
  const content = 'In this service pillar we cover everything from;'
  const list = [
    'Supply',
    'Demand',
    'Programmatic ecosystem ',
    'Blockchain ad exchange',
    'Advertising strategy'
  ]
  const contact = {
    title: 'Chat with Paul',
    href: '#lets-talk'
  }

  return (
    <Parallax onEnter={() => setVisible(true)}>
      <div className={`flex flex-col-reverse lg:flex-row-reverse`}>
        <div
          className={`flex flex-col relative ml-auto lg:max-w-[50%] 
          ${visible ? 'opacity-100 left-0' : 'left-32 opacity-0'}
          transition-all ease-in-out duration-1000 text-blue`}>
          <span className="primary-label mb-2 mr-auto">{subtitle}</span>
          <h2 className="text-44x lg:text-80x mb-10 font-medium">{title}</h2>
          <WebContent content={content} list={list} contact={contact} />
        </div>
        <div className={`px-10 mb-10`}>
          <Tilt
            tiltAngleXManual={manualTiltAngleY}
            tiltAngleYManual={manualTiltAngleX}
            className="mx-auto w-[300px] h-[400px] lg:w-[500px] lg:h-[650px] layerd-tilt max-w-full">
            <StaticImage
              className="!absolute w-full left-2 top-2 layer-1"
              src="../images/rectangle_left.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <StaticImage
              className="!absolute w-full left-2 top-2 layer-2"
              src="../images/rectangle_bg_left.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <StaticImage
              className="!absolute w-full top-0 layer-3 "
              src="../images/rectangle_img_left.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <div className="!absolute top-0 layer-4 flex flex-col justify-between h-full w-full px-6 pt-[50px] lg:pt-[320px] text-26x">
              <div className="px-4 pb-1.5 pt-2.5 bg-[#212121] text-primary uppercase secondary-font mr-auto">
                <span>efficiency</span>
              </div>
            </div>
            <div className="!absolute top-0 layer-5 flex flex-col justify-between h-full w-full px-6 pt-[200px] lg:pt-[280px] lg:pb-[200px] text-26x">
              <div className="px-4 pb-1.5 pt-2.5 bg-[#212121] text-white uppercase secondary-font ml-auto">
                <span>scalability</span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </Parallax>
  )
}
const WebIntroItem2: FC<WebIntroItemProps> = ({
  manualTiltAngleX,
  manualTiltAngleY
}) => {
  const [visible, setVisible] = useState(false)

  const subtitle = 'Web 2.5'
  const contentLeft = true
  const title = 'End to end creative, campaigns, strategy and services '
  const content = 'In this service pillar we cover everything from;'
  const list = [
    'Branding & design',
    'Marketing strategy',
    'Media campaigns',
    'Web development'
  ]
  const contact = {
    title: 'Chat with Georges',
    href: '#lets-talk'
  }

  return (
    <Parallax onEnter={() => setVisible(true)}>
      <div className={`flex flex-col-reverse lg:flex-row`}>
        <div
          className={`flex flex-col relative lg:max-w-[55%]"}
          ${visible ? 'opacity-100 left-0' : '-left-32 opacity-0'}
          transition-all ease-in-out duration-1000 text-blue`}>
          <span className="primary-label mb-2 mr-auto">{subtitle}</span>
          <h2 className="text-44x lg:text-80x mb-10 font-medium">{title}</h2>
          <WebContent content={content} list={list} contact={contact} />
        </div>
        <div className={`px-10 mb-10`}>
          <Tilt
            tiltAngleXManual={manualTiltAngleY}
            tiltAngleYManual={manualTiltAngleX}
            className="mx-auto w-[300px] h-[450px] lg:w-[500px] lg:h-[650px] layerd-tilt max-w-full">
            <StaticImage
              className="!absolute w-full left-2 top-2 layer-1"
              src="../images/rectangle_right.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <StaticImage
              className="!absolute w-full top-0 layer-2 "
              src="../images/rectangle_bg_right.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <StaticImage
              className="!absolute w-full top-0 layer-3 "
              src="../images/rectangle_img_right.png"
              alt="computer_img"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
            />

            <div className="!absolute top-0 layer-4 flex flex-col justify-between h-full w-full pt-[50px] lg:pt-[200px]">
              <div className="px-4 pb-1.5 pt-2.5 bg-[#212121] text-primary  uppercase secondary-font text-26x mr-auto">
                <span>vision </span>
              </div>
            </div>
            <div className="!absolute top-0 layer-5 flex flex-col justify-between h-full w-full pt-[250px] lg:pt-[400px] pr-[25px]">
              <div className="px-4 pb-1.5 pt-2.5 bg-[#212121] text-white uppercase secondary-font text-26x ml-auto">
                <span>creativity</span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </Parallax>
  )
}

export const WebContent = ({
  content,
  list,
  contact
}: {
  content: string
  list: string[]
  contact: { title: string; href: string }
}) => (
  <>
    {/* <p className="text-32x mb-4 text-blue">{content}</p> */}
    <ul className="text-24x lg:text-32x mb-6 ">
      {list.map((item, index) => (
        <li className="py-1.5 lg:py-2" key={index}>
          <span className="pr-4 font-semibold">/</span>
          {item}
        </li>
      ))}
    </ul>

    <a className="primary-btn " href={contact.href}>
      Learn more
    </a>
  </>
)

export default Web_intro
