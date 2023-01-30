import { useState } from 'react'
import * as React from 'react'
import Marquee from 'react-fast-marquee'
import Tilt from 'react-parallax-tilt'
import { Swiper, SwiperSlide } from 'swiper/react'
import Contact_us from '../ContactUs'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Content_Container from '../../layout/Content_Container'
import ImageComponent from '../caseStudies/CaseStudyImageComponent'
import { Link } from 'gatsby'

interface CaseStudy_templateProps {}

function CaseStudy_template(props: any) {
  const black = true
  const [visible, setVisible] = useState(false)
  const [navColor, setNavColor] = useState('black')

  return (
    <Content_Container background={black ? 'bg-[#151315]' : 'bg-[#f1f3e5]'}>
      <Header visible={visible} navColor={navColor} />

      <div className="max-w-[calc(100vw-26px)] lg:max-w-[1392px] mx-auto">
        <div className="border border-[#333549] divide-y divide-[#333549]">
          <h1 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[30px] pb-[25px] md:pb-[0]">
            {props.pageContext.study.name}
          </h1>
          <div className="p-3 md:p-5">
            {props.pageContext &&
            props.pageContext.study &&
            props.pageContext.study.topImage ? (
              <ImageComponent
                imageName={props.pageContext.study.topImage}
                caseStudyImage="w-full"
              />
            ) : (
              ''
            )}
          </div>
          <div className="py-5">
            <Marquee gradient={false}>
              {props.pageContext.study.features.map((feature: string) => (
                <div
                  className="text-[17px] md:text-[30px] secondary-font uppercase text-primary border-2 leading-[24px] md:leading-[37px] border-[#424A30] px-4 m-2 rounded-full font-normal pt-1"
                  key={feature}>
                  {feature}
                </div>
              ))}
            </Marquee>
          </div>

          {/* About */}
          <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.aboutTitle}
          </h2>
          <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px] px-[12px] md:px-[28px] pt-[30px] pb-[45px]">
            {props.pageContext.study.aboutDescription}
          </p>
          <div className="swiper-mouse">
            <Swiper
              slidesPerView={1.5}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 30
                }
              }}
              spaceBetween={30}
              pagination={{
                clickable: true
              }}
              className="mySwiper">
              {props.pageContext.study.projectImages.map((slide: string) => (
                <div
                  className="text-[17px] md:text-[30px] secondary-font uppercase text-primary border border-[#DDFF8D] px-4 m-2 rounded-full font-normal"
                  key={slide}>
                  <SwiperSlide className="border-r border-[#333549] px-[12px] md:px-[0] p-10">
                    <ImageComponent
                      imageName={slide}
                      caseStudyImage="max-h-[600px] min-h-[300px] md:min-h-[600px] object-contain"
                    />
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
          {/* Idea */}
          
          <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.ideaTitle}
          </h2>
          <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px] px-[12px] md:px-[28px] pt-[30px] pb-[45px]">
            {props.pageContext.study.ideaDescription}
          </p>
          <div>
            <div className="md:py-[100px] py-[30px]">
              <div className="md:h-[650px] md:w-[calc(100%-200px)] w-[87%] mx-auto border-2 border-[#D7D7D7] rounded-[20px] overflow-clip">
                <iframe
                  src="https://www.youtube.com/embed/asXUrMGbPsw?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full "
                />
              </div>
            </div>
          </div>
          <div className="py-5">
          <Marquee gradient={false}>
              {props.pageContext.study.features.map((feature: string) => (
                <div
                  className="text-[17px] md:text-[30px] secondary-font uppercase text-primary border-2 leading-[24px] md:leading-[37px] border-[#424A30] px-4 m-2 rounded-full font-normal pt-1"
                  key={feature}>
                  {feature}
                </div>
              ))}
            </Marquee>
          </div>
          {/* Execution */}
          
          <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.executionTitle}
          </h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="items-center border-b md:border-b-0 md:border-r border-[#333549] text-center py-[50px] md:py-[130px] px-[50px]">
              <ImageComponent
                imageName={props.pageContext.study.mobileImage}
                caseStudyImage=""
              />
            </div>
            <div className="px-[12px] md:px-[28px] py-[30px] md:py-[0]">
              <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px]">
                {props.pageContext.study.mobileDescription}
              </p>
              <a className="primary-btn !bg-primary !text-blue md:!mt-[80px] mb-[20px] md:mb-[0]" href={''}>
                Learn more
              </a>
            </div>
          </div>
          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.ctoTitle ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="items-center text-center  md:py-40 md:hidden border-b md:border-b-0 border-[#333549]" >
                <Tilt className="w-full h-[500px] sm:h-[700px] layerd-tilt flex items-center justify-center">
                  <ImageComponent
                    imageName={props.pageContext.study.ctoLayer}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px] layer-1"
                  />
                  <ImageComponent
                    imageName={props.pageContext.study.ctoImage}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px]  layer-3"
                  />
                </Tilt>
              </div>
              <div className="md:border-r border-[#333549] px-[12px] py-[50px] md:p-6 flex flex-col justify-center">
                <h3 className="font-semibold text-[28px] md:text-[32px] text-[#DDFF8D] w-full">
                  {props.pageContext.study.ctoTitle}
                </h3>
                <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px]">
                  {props.pageContext.study.ctoText}
                </p>
              </div>
              <div className="items-center text-center  md:py-40 hidden md:flex">
                <Tilt className="w-full h-[500px] sm:h-[700px] layerd-tilt flex items-center justify-center">
                  <ImageComponent
                    imageName={props.pageContext.study.ctoLayer}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px] layer-1"
                  />
                  <ImageComponent
                    imageName={props.pageContext.study.ctoImage}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px]  layer-3"
                  />
                </Tilt>
              </div>
            </div>
          ) : (
            ''
          )}

          {/* Lab */}
          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.labsTitle ? (
           
            <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.labsTitle}
            </h2>
          
          ) : (
            ''
          )}

          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.labsDescription ? (
           
            <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px] px-[12px] md:px-[28px] pt-[30px] pb-[45px]">
            {props.pageContext.study.labsDescription}
          </p>
          ) : (
            ''
          )}

          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.labImages ? (
            <div className="swiper-mouse">
              <Swiper
                slidesPerView={1.5}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 30
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                  }
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true
                }}
                className="mySwiper">
                {props.pageContext.study.labImages.map((lab: string) => (
                  <div
                    className="text-[17px] md:text-[30px] secondary-font uppercase text-primary border border-[#DDFF8D] px-4 m-2 rounded-full font-normal"
                    key={lab}>
                    <SwiperSlide className="border-r border-[#333549] px-[12px] md:px-[0] p-10">
                      <ImageComponent
                        imageName={lab}
                        caseStudyImage="max-h-[600px] min-h-[300px] md:min-h-[600px] object-contain"
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>
          ) : (
            ''
          )}

          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.labsDescription ? (
            <div className="py-5">
              <Marquee gradient={false}>
              {props.pageContext.study.features.map((feature: string) => (
                <div
                  className="text-[17px] md:text-[30px] secondary-font uppercase text-primary border-2 leading-[24px] md:leading-[37px] border-[#424A30] px-4 m-2 rounded-full font-normal pt-1"
                  key={feature}>
                  {feature}
                </div>
              ))}
            </Marquee>
            </div>
          ) : (
            ''
          )}

          {/* Idea */}
          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.ideaTitle2 ? (
            <>
             
              <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.ideaTitle2}
          </h2>
          <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px] px-[12px] md:px-[28px] pt-[30px] pb-[45px]">
            {props.pageContext.study.ideaDescription2}
          </p>
            </>
          ) : (
            ''
          )}

          {/* Execution */}
          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.executionTitle2 ? (
            <>
             
              <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[53px] md:leading-[164px] px-[12px] md:px-[28px] pt-[30px] md:pt-[60px] pb-[25px] md:pb-[30px]">
            {props.pageContext.study.executionTitle2}
          </h2>
          
              <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                <div className="items-center border-b md:border-b-0  md:border-r border-[#333549] text-center py-[50px] md:py-[130px] px-[50px]">
                  <ImageComponent
                    imageName={props.pageContext.study.mobileImage2}
                    caseStudyImage=""
                  />
                </div>
                <div className="px-[12px] md:px-[28px] py-[30px] md:py-[0]">
                  <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px]">
                    {props.pageContext.study.mobileDescription}
                  </p>
                  <a className="primary-btn !bg-primary !text-blue mb-[20px] md:!mt-[80px] md:mb-[0]" href={''}>
                    Learn more
                  </a>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
          {props.pageContext &&
          props.pageContext.study &&
          props.pageContext.study.ctoTitle2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="items-center text-center md:py-40 md:hidden border-b md:border-b-0 border-[#333549]">
                <Tilt className="w-full h-[500px] sm:h-[700px] layerd-tilt flex items-center justify-center">
                  <ImageComponent
                    imageName={props.pageContext.study.ctoLayer2}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px] layer-1"
                  />
                  <ImageComponent
                    imageName={props.pageContext.study.ctoImage2}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px]  layer-3"
                  />
                </Tilt>
              </div>
              <div className="md:border-r border-[#333549] px-[12px] py-[50px] md:p-6 flex flex-col justify-center">
                <h3 className="font-semibold text-[28px] md:text-[32px] text-[#DDFF8D] w-full">
                  {props.pageContext.study.ctoTitle2}
                </h3>
                <p className="font-medium text-[28px] md:text-[45px] text-[#fff] tracking-[0.01em] leading-[40px] md:leading-[55px]">
                  {props.pageContext.study.ctoText2}
                </p>
              </div>
              <div className="items-center text-center md:py-40 hidden md:flex">
                <Tilt className="w-full h-[500px] sm:h-[700px] layerd-tilt flex items-center justify-center">
                  <ImageComponent
                    imageName={props.pageContext.study.ctoLayer2}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px] layer-1"
                  />
                  <ImageComponent
                    imageName={props.pageContext.study.ctoImage2}
                    caseStudyImage="!absolute  max-w-[295px] sm:max-w-[445px]  layer-3"
                  />
                </Tilt>
              </div>
             
            </div>
          ) : (
            ''
          )}

          {/* More Project */}
          <h2 className="secondary-font font-normal text-[45px] md:text-[140px] text-[#F9FAF4] -tracking-[0.03em] leading-[55px] md:leading-[164px] pt-9 pb-6 md:pt-10 md:pb-5 px-5 text-center md:text-left">
            More
            <br />
            projects
          </h2>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between group p-5 border-b border-[#333549]">
              <h3 className="font-medium text-[50px] md:text-[128px] text-[#F9FAF4] group-hover:text-[#DDFF8D] -tracking-[0.03em]">
                Alkimi Exchange
              </h3>
              <Link
                className="font-medium text-[20px] tracking-[0.01em] text-[#F9FAF4] group-hover:text-[#DDFF8D] underline"
                to="/case-studies/alkimi">
                Learn more
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between group p-5 border-b border-[#333549]">
              <h3 className="font-medium text-[50px] md:text-[128px] text-[#F9FAF4] group-hover:text-[#DDFF8D] -tracking-[0.03em]">
                Affiniti
              </h3>
              <Link
                className="font-medium text-[20px] tracking-[0.01em] text-[#F9FAF4] group-hover:text-[#DDFF8D] underline"
                to="/case-studies/affiniti">
                Learn more
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between group p-5 border-b border-[#333549]">
              <h3 className="font-medium text-[50px] md:text-[128px] text-[#F9FAF4] group-hover:text-[#DDFF8D] -tracking-[0.03em]">
                Alex The Alkimist
              </h3>
              <Link
                className="font-medium text-[20px] tracking-[0.01em] text-[#F9FAF4] group-hover:text-[#DDFF8D] underline"
                to="/case-studies/alex-the-alkimist">
                Learn more
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between group p-5 border-b border-[#333549]">
              <h3 className="font-medium text-[50px] md:text-[128px] text-[#F9FAF4] group-hover:text-[#DDFF8D] -tracking-[0.03em]">
                Nok Pay
              </h3>
              <Link
                className="font-medium text-[20px] tracking-[0.01em] text-[#F9FAF4] group-hover:text-[#DDFF8D] underline"
                to="/case-studies/nok-pay">
                Learn more
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between group p-5 border-b border-[#333549]">
              <h3 className="font-medium text-[50px] md:text-[128px] text-[#F9FAF4] group-hover:text-[#DDFF8D] -tracking-[0.03em]">
                Jenny Co
              </h3>
              <Link
                className="font-medium text-[20px] tracking-[0.01em] text-[#F9FAF4] group-hover:text-[#DDFF8D] underline"
                to="/case-studies/jenny-co">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Contact_us background={black ? 'bg-[#141414]' : 'bg-blue'} />
      <Footer background={black ? 'bg-[#141414]' : 'bg-blue'} />
    </Content_Container>
  )
}
export default CaseStudy_template
function useRef(arg0: null) {
  throw new Error('Function not implemented.')
}

function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error('Function not implemented.')
}
