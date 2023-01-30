import * as React from "react"
import { Casestudy } from "./CaseStudies"
import Tilt from "react-parallax-tilt"
import ImageComponent from './CaseStudyImageComponent'


interface Casestudy_cardProps {
  casestudy: Casestudy
}


const Casestudy_card: React.FC<Casestudy_cardProps> = ({ casestudy }) => {

  return (
    <div className={`casestudy-grid group tracking-[0.01em] border-t-0 border border-[#333549] 2xl:flex`}>
       <a href={casestudy.slug}>
      <div className={`relative grow w-full 2xl:min-w-[560px] 2xl:flex 2xl:flex-col 2xl:justify-between`}>
        <div className="relative w-full z-10 flex justify-center items-center">
          <ImageComponent imageName={casestudy.mainImage} caseStudyImage="sm:invisible !absolute w-full w-[90%] max-w-[350px] lg:max-w-[400px] layer-3 sm:grayscale group-hover:grayscale-0 " />
          <Tilt className="invisible sm:visible w-full h-[500px] lg:h-[600px] layerd-tilt flex items-center justify-center">
            <ImageComponent imageName={casestudy.layeredImage} caseStudyImage="!absolute w-full max-w-[80%] lg:max-w-[400px] layer-1 " />
            <ImageComponent imageName={casestudy.mainImage} caseStudyImage="!absolute w-full max-w-[80%] lg:max-w-[400px] layer-3 sm:grayscale group-hover:grayscale-0 " />
          </Tilt>
        </div>
        
          <div className="invisible sm:group-hover:visible scroll-text child-1 secondary-font  text-white text-[320px] flex items-center uppercase">{casestudy.scrollText}</div>
          <div className="invisible sm:group-hove:visible scroll-text child-2 secondary-font  text-white text-[320px] flex items-center uppercase">{casestudy.scrollText}</div>
         
        <div className="flex justify-center py-4 md:py-5 border-t border-[#333549] 2xl:border-b-0 text-xl md:text-3xl text-white group-hover:text-primary secondary-font uppercase h-[60px] md:h-[74px]">
          {casestudy.title}
        </div>
      </div>
      </a>
    </div>
  )
}
export default Casestudy_card
