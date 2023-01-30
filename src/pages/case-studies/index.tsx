import type { FC } from 'react'
import Content_Container from '../../layout/Content_Container'
import * as React from 'react'
import Contact_us from '../../components/ContactUs'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer';
import Type_txt from '../../components/TypeTxt';
import Case_studies from '../../components/caseStudies/CaseStudies'
import { useState } from 'react'
interface indexProps {}

const index: FC<indexProps> = ({}) => {
  
  const black = true
  const [visible, setVisible] = useState(false)
  const [navColor, setNavColor] = useState('black')
  return (
    <Content_Container background={black ? 'bg-[#151315]' : 'bg-[#f1f3e5]'}>
      <Header visible={visible} navColor={navColor} />
      <div className='max-w-[calc(100vw-26px)] lg:max-w-[1392px] mx-auto'>
        <div className='border-solid border border-[#333549] p-3 sm:p-7'>
          <h1 className="text-white text-[30px] sm:text-[64px] font-medium tracking-[.01em] leading-[26px] sm:leading-[62px] pb-3 sm:pb-7">
            We are a digital agency that helps businesses succeed online through website design and development, digital marketing, and custom solutions.
          </h1>
          
        </div>
        <Case_studies />
      </div>
      
      <Contact_us background={black ? 'bg-[#141414]' : 'bg-blue'}/>
      <Footer background={black ? 'bg-[#141414]' : 'bg-blue'}/>
    </Content_Container>
  )
}
export default index
