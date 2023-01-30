import * as React from 'react'
import Content_Container from '../layout/Content_Container'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { useState } from 'react'
import Founders from '../components/Founders'

const founders = () => {
  const [visible, setVisible] = useState(false)
  const [navColor, setNavColor] = useState('cream')
  const black = false
  return (
    <Content_Container background={visible ? 'bg-[#151315]' : 'bg-[#f1f3e5]'}>
      <Header visible={visible} navColor={navColor} />

      <Founders />

      <Footer background={black ? 'bg-black' : 'bg-blue'}/>
    </Content_Container>
  )
}

export default founders
