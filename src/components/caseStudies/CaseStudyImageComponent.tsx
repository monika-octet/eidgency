import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


export default function CaseStudyImageComponent({
  imageName,
  caseStudyImage
}: {
  imageName: string
  caseStudyImage: string
}) {
  const caseStudyImages = useStaticQuery(graphql`
    query caseStudyImages {
      affiniti: imageSharp(fluid: { originalName: { eq: "affiniti.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_second_layer: imageSharp(fluid: { originalName: { eq: "affiniti_second_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      al: imageSharp(fluid: { originalName: { eq: "al.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_second_layer: imageSharp(fluid: { originalName: { eq: "alex_second_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nokpay: imageSharp(fluid: { originalName: { eq: "nokpay.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nok_second_layer: imageSharp(fluid: { originalName: { eq: "nok_second_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi_first_layer: imageSharp(fluid: { originalName: { eq: "alkimi_first_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alkimi_second_layer: imageSharp(fluid: { originalName: { eq: "alkimi_second_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jennyco: imageSharp(fluid: { originalName: { eq: "jennyco.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jenny_second_layer: imageSharp(fluid: { originalName: { eq: "jenny_second_layer.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }

      hero_img: imageSharp(fluid: { originalName: { eq: "hero_img.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      mobile_version_site: imageSharp(fluid: { originalName: { eq: "mobile_version_site.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      mobile_version_site2: imageSharp(fluid: { originalName: { eq: "mobile_version_site2.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      chandru_layer: imageSharp(fluid: { originalName: { eq: "chandru_layer.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      ben: imageSharp(fluid: { originalName: { eq: "ben.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      ben_layer: imageSharp(fluid: { originalName: { eq: "ben_layer.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      chandru: imageSharp(fluid: { originalName: { eq: "chandru.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      slide1: imageSharp(fluid: { originalName: { eq: "slide1.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      slide2: imageSharp(fluid: { originalName: { eq: "slide2.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      slide3: imageSharp(fluid: { originalName: { eq: "slide3.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      slide4: imageSharp(fluid: { originalName: { eq: "slide4.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      },
      lab1: imageSharp(fluid: { originalName: { eq: "lab1.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      lab2: imageSharp(fluid: { originalName: { eq: "lab2.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      lab3: imageSharp(fluid: { originalName: { eq: "lab3.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      lab4: imageSharp(fluid: { originalName: { eq: "lab4.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      
      jenni_co_hero_img: imageSharp(fluid: { originalName: { eq: "jenni_co_hero_img.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      jenni_slide_1: imageSharp(fluid: { originalName: { eq: "jenni_slide_1.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_slide_2: imageSharp(fluid: { originalName: { eq: "jenni_slide_2.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_slide_3: imageSharp(fluid: { originalName: { eq: "jenni_slide_3.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_slide_4: imageSharp(fluid: { originalName: { eq: "jenni_slide_4.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      },
      jenni_slide_5: imageSharp(fluid: { originalName: { eq: "jenni_slide_5.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      },
      jenni_lab_1: imageSharp(fluid: { originalName: { eq: "jenni_lab_1.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_lab_2: imageSharp(fluid: { originalName: { eq: "jenni_lab_2.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_lab_3: imageSharp(fluid: { originalName: { eq: "jenni_lab_3.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_lab_4: imageSharp(fluid: { originalName: { eq: "jenni_lab_4.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_lab_5: imageSharp(fluid: { originalName: { eq: "jenni_lab_5.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      jenni_mobile_version_site: imageSharp(fluid: { originalName: { eq: "jenni_mobile_version_site.png" } }) {
        gatsbyImageData(quality: 70, placeholder: BLURRED)
      }
      
      nok_pay_hero_img: imageSharp(fluid: { originalName: { eq: "nok_pay_hero_img.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      nok_pay_slide_1: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_1.png" } }) {
        gatsbyImageData(quality: 60, placeholder: BLURRED)
      }
      nok_pay_slide_2: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_2.png" } }) {
        gatsbyImageData(quality: 60, placeholder: BLURRED)
      }
      nok_pay_slide_3: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_3.png" } }) {
        gatsbyImageData(quality: 60, placeholder: BLURRED)
      }
      nok_pay_slide_4: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_4.png" } }) {
        gatsbyImageData(quality: 60, placeholder: BLURRED)
      },
      nok_pay_slide_5: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_5.png" } }) {
        gatsbyImageData(quality: 50, placeholder: BLURRED)
      }
      nok_pay_slide_6: imageSharp(fluid: { originalName: { eq: "nok_pay_slide_6.png" } }) {
        gatsbyImageData(quality: 50, placeholder: BLURRED)
      }
      nok_pay_mobile_version_site: imageSharp(fluid: { originalName: { eq: "nok_pay_mobile_version_site.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      greg: imageSharp(fluid: { originalName: { eq: "greg.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      greg_layer: imageSharp(fluid: { originalName: { eq: "greg_layer.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }

      alex_hero_img: imageSharp(fluid: { originalName: { eq: "alex_hero_img.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      alex_slide_1: imageSharp(fluid: { originalName: { eq: "alex_slide_1.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_slide_2: imageSharp(fluid: { originalName: { eq: "alex_slide_2.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_slide_3: imageSharp(fluid: { originalName: { eq: "alex_slide_3.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_slide_4: imageSharp(fluid: { originalName: { eq: "alex_slide_4.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      },
      alex_slide_5: imageSharp(fluid: { originalName: { eq: "alex_slide_5.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_lab_1: imageSharp(fluid: { originalName: { eq: "alex_lab_1.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_lab_2: imageSharp(fluid: { originalName: { eq: "alex_lab_2.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_lab_3: imageSharp(fluid: { originalName: { eq: "alex_lab_3.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_lab_4: imageSharp(fluid: { originalName: { eq: "alex_lab_4.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      },
      alex_lab_5: imageSharp(fluid: { originalName: { eq: "alex_lab_5.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      alex_mobile_version_site: imageSharp(fluid: { originalName: { eq: "alex_mobile_version_site.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }

      affiniti_hero_img: imageSharp(fluid: { originalName: { eq: "affiniti_hero_img.png" } }) {
        gatsbyImageData(quality: 60, placeholder: BLURRED)
      }
      affiniti_slide_1: imageSharp(fluid: { originalName: { eq: "affiniti_slide_1.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      affiniti_slide_2: imageSharp(fluid: { originalName: { eq: "affiniti_slide_2.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      affiniti_slide_3: imageSharp(fluid: { originalName: { eq: "affiniti_slide_3.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      affiniti_slide_4: imageSharp(fluid: { originalName: { eq: "affiniti_slide_4.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      },
      affiniti_slide_5: imageSharp(fluid: { originalName: { eq: "affiniti_slide_5.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      affiniti_slide_6: imageSharp(fluid: { originalName: { eq: "affiniti_slide_6.png" } }) {
        gatsbyImageData(quality: 80, placeholder: BLURRED)
      }
      affiniti_lab_1: imageSharp(fluid: { originalName: { eq: "affiniti_lab_1.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_lab_2: imageSharp(fluid: { originalName: { eq: "affiniti_lab_2.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_lab_3: imageSharp(fluid: { originalName: { eq: "affiniti_lab_3.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_lab_4: imageSharp(fluid: { originalName: { eq: "affiniti_lab_4.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      },
      affiniti_lab_5: imageSharp(fluid: { originalName: { eq: "affiniti_lab_5.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_lab_6: imageSharp(fluid: { originalName: { eq: "affiniti_lab_6.png" } }) {
        gatsbyImageData(quality: 90, placeholder: BLURRED)
      }
      affiniti_mobile_version_site: imageSharp(fluid: { originalName: { eq: "affiniti_mobile_version_site.png" } }) {
        gatsbyImageData(quality: 100, placeholder: BLURRED)
      }
    }
  `)

  return (
    <GatsbyImage
      image={caseStudyImages[imageName].gatsbyImageData}
      alt="image"
      className={`${caseStudyImage}`}
    />
  )
}
