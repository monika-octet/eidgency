import * as React from 'react'
import type { HeadFC } from 'gatsby'
import Content_Container from '../layout/Content_Container'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Web_intro from '../components/WebIntro'
import Web3 from '../components/Web3'
import Projects from '../components/Projects'
import Contact_us from '../components/ContactUs'
import Header from '../components/layout/Header'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useState, useEffect, useRef } from 'react'
import Footer from '../components/layout/Footer'
import AlkimiVideo from '../components/AlkimiVideo'

const scrollToElement = require('scroll-to-element')

const IndexPage = () => {
  const [visible, setVisible] = useState(false)
  const [enteredWeb3, setEnteredWeb3] = useState(false)
  const [animationStart, setAnimationStart] = useState(false)
  const web3Ref = useRef<HTMLDivElement>(null)

  const [navColor, setNavColor] = useState('cream')

  const black = false

  useEffect(() => {
    if (enteredWeb3) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.scrollBehavior = 'auto'
      setTimeout(() => {
        scrollToElement('#web3', {
          offset: 0,
          align: 'middle',
          ease: 'out-bounce',
          duration: 10
        })
        setTimeout(() => {
          setVisible(true)
          setAnimationStart(true)
        }, 200)
      }, 200)
    }
  }, [enteredWeb3])

  return (
    <ParallaxProvider>
      <Content_Container background={visible ? 'bg-[#151315]' : 'bg-[#f1f3e5]'}>
        <Header visible={visible} navColor={navColor} />

        <Parallax
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('blue')
            else if (e < 0.999 && e > 0.7) setNavColor('cream')
          }}>
          <Intro />
        </Parallax>

        <Parallax
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('cream')
            else if (e < 0.999 && e > 0.7) setNavColor('blue')
          }}>
          <Services />
        </Parallax>

        <Parallax
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('black')
            else if (e < 0.999 && e > 0.7) setNavColor('cream')
          }}>
          <Web_intro />
        </Parallax>

        <Parallax
          onEnter={() => setEnteredWeb3(true)}
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('black')
            else if (e < 0.999 && e > 0.7) setNavColor('black')
          }}>
          <div ref={web3Ref}>
            <Web3 animationStart={animationStart} setVisible={setVisible} />
          </div>
        </Parallax>

        <Parallax
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('cream')
            else if (e < 0.999 && e > 0.7) setNavColor('black')
          }}>
          <Projects />
        </Parallax>

        <Parallax
          onProgressChange={(e) => {
            if (e > 0.999) setNavColor('blue')
            else if (e < 0.999 && e > 0.7) setNavColor('cream')
          }}>
          <AlkimiVideo />
        </Parallax>

        <Contact_us background={black ? 'bg-black' : 'bg-blue'}/>

        <Footer background={black ? 'bg-black' : 'bg-blue'}/>
      </Content_Container>
    </ParallaxProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Eidgensi | Home</title>
    <meta
      name="description"
      content="We are a creative media agency that enables advertising, design & development for the new era of the internet."
    />
    <meta
      name="keywords"
      content="Eidgensi, Eidgensi agency, Eidgensi creative agency, WEB 3, WEB 2, WEB 2.5, Marketing, supply & demand, Advertising, Web dev, media, branding, design, development, creative, creative agency, creative media agency, creative media, creative media"
    />
    <meta name="og:title" content="Eidgensi" />
    <meta
      name="og:description"
      content="We are a creative media agency that enables advertising, design & development for the new era of the internet."
    />
    <meta name="og:image" content="https://eidgensi.com/image/OG.jpg" />
    <meta name="og:url" content="https://eidgensi.com" />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="Eidgensi" />
    <meta name="og:width" content="1200" />
    <meta name="og:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@eidgensi" />
    <meta name="twitter:creator" content="@eidgensi" />
    <meta name="twitter:title" content="Eidgensi" />
    <meta
      name="twitter:description"
      content="We are a creative media agency that enables advertising, design & development for the new era of the internet."
    />
    <meta name="twitter:image" content="https://eidgensi.com/image/OG.jpg" />
    <meta name="twitter:image:alt" content="Eidgensi" />
    <meta name="twitter:domain" content="https://eidgensi.com" />
    <meta name="twitter:width" content="1200" />
    <meta name="twitter:height" content="630" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)
