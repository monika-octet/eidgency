import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Img from "gatsby-image"

export default function ImageComponent({
  imageName,
  children
}: {
  imageName: string
  children?: React.ReactNode
}) {
  const projectImages = useStaticQuery(graphql`
    query pojectImages {
      alex: imageSharp(fluid: { originalName: { eq: "alex.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_bg: imageSharp(fluid: { originalName: { eq: "alex_bg.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_mobile: imageSharp(
        fluid: { originalName: { eq: "alex_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_bg_mobile: imageSharp(
        fluid: { originalName: { eq: "alex_bg_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jacob: imageSharp(fluid: { originalName: { eq: "jacob.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jacob_bg: imageSharp(fluid: { originalName: { eq: "jacob_bg.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jacob_mobile: imageSharp(fluid: { originalName: { eq: "jacob.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jacob_bg_mobile: imageSharp(
        fluid: { originalName: { eq: "jacob_bg_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      labs: imageSharp(fluid: { originalName: { eq: "labs.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      labs_bg: imageSharp(fluid: { originalName: { eq: "labs_bg.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      labs_mobile: imageSharp(
        fluid: { originalName: { eq: "labs_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      labs_bg_mobile: imageSharp(
        fluid: { originalName: { eq: "labs_bg_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nokPay: imageSharp(fluid: { originalName: { eq: "nokPay.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nokPay_bg: imageSharp(fluid: { originalName: { eq: "nokPay_bg.png" } }) {
        gatsbyImageData(quality: 10, placeholder: BLURRED)
      }
      nokPay_mobile: imageSharp(
        fluid: { originalName: { eq: "nokPay_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nokPay_bg_mobile: imageSharp(
        fluid: { originalName: { eq: "nokPay_bg_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi: imageSharp(fluid: { originalName: { eq: "alkimi.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi_bg: imageSharp(fluid: { originalName: { eq: "alkimi_bg.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi_mobile: imageSharp(
        fluid: { originalName: { eq: "alkimi_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi_bg_mobile: imageSharp(
        fluid: { originalName: { eq: "alkimi_bg_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jenny_co: imageSharp(fluid: { originalName: { eq: "jenny_co.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jenny_co_mobile: imageSharp(
        fluid: { originalName: { eq: "jenny_co_mobile.png" } }
      ) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jenny_co_bg: imageSharp(
        fluid: { originalName: { eq: "jenny_co_bg.png" } }
      ) {
        gatsbyImageData(quality: 10, placeholder: BLURRED)
      }
    }
  `)

  if (!projectImages[imageName]) return null

  if (children) {
    return (
      <div className="relative h-full">
        <div className="absolute inset-0 -z-10">
          <GatsbyImage
            image={projectImages[imageName].gatsbyImageData}
            alt="image"
            className="h-full w-full min-h-full"
          />
        </div>

        {children}
      </div>
    )
  }


 
 

  return (
    <GatsbyImage
      style={{ width: '100%', height: '100%' }}
      image={projectImages[imageName].gatsbyImageData}
      alt="image"
      className=""
    />
  )
}
