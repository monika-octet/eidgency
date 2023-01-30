import * as React from 'react'
import Founder_card from './FounderCard'

interface FoundersProps {}

export type Founder = {
  title: string
  name: string
  about: string[]
  color: string
  experience: {
    time: string
    companies: string[]
  }
  social: {
    twitter: string
    linkedin: string
  }
}

const Founders: React.FC<FoundersProps> = ({}) => {
  const founders: Founder[] = [
    {
      title: 'GM',
      name: 'Georges Tertois',
      color: '#232646',
      about: [
        `With over ten years in the design & creative agency industry, Georges has partnered with clients like Google, Just Eat & Purplebricks to create technology-led solutions & products that propel innovation and growth.`,
        `Starting his career as an accountant, helping start-ups navigate the problematic market after the 2009 crash. In 2019 with friends, he helped create a canned wine company raising £1m & assumed the position of CMO. Georges looks forward to how Web3 technologies, such as NFTs, can solve current issues with brand loyalty and engagement.`
      ],
      experience: { time: '10+', companies: ['google', 'just_eat', 'purple'] },
      social: {
        twitter: 'https://twitter.com/GeorgesTertois',
        linkedin: 'https://www.linkedin.com/in/georges-tertois-57074153/'
      }
    },
    {
      title: 'Director of Strategy',
      name: 'Paul Dimmock',
      color: '#212121',
      about: [
        `Paul has eleven years experience within advertising, starting with roles at GroupM & Denstu. Clients included J&J, Eurostar & having set-up adidas’ global trading desk he moved to News UK as programmatic lead, then setting-up Octave with Bauer in 2020. `,
        `He joined Alkimi in 2022 as Head of Demand, before setting-up Eidgensi, & is driven by the adoption of blockchain tech in driving the media industry forward.`
      ],
      experience: {
        time: '11+',
        companies: ['jj', 'dentsu', 'addidas', 'eurostar']
      },
      social: {
        twitter: 'https://twitter.com/PaulDimmock',
        linkedin: 'https://www.linkedin.com/in/pdimmock/'
      }
    },
    {
      title: 'Director of Web3',
      name: 'Morgan Selbekk',
      color: '#313240',
      about: [
        `Started off his career as a web designer & developer working with brands such as Apple, Sony & Samsung, then transitioned over to e-commerce SaaS. Initially he was a solutions engineer creating and building custom e-commerce integration and then progressed to a Director of Design Services, essentially running a SaaS agency, designing and building e-commerce instances for brands such as Versace, Links of London & Clarins. `,
        `Morgan is now applying his skill set and agency experience to Web3, helping onboard brands into the new age of the internet.`
      ],
      experience: { time: '10+', companies: ['apple', 'sony', 'samsung'] },
      social: {
        twitter: 'https://twitter.com/mselbekk1',
        linkedin:
          'https://www.linkedin.com/in/morgan-christian-selbekk-a0617738/'
      }
    }
  ]

  return (
    <div className="container">
      <div className="secondary-font text-[52px] leading-[50px] md:text-[90px] md:leading-[90px] lg:text-[138px] lg:leading-[130px] text-blue tracking-[0.01em] font-normal">
        <h1 className="">Meet the</h1>
        <h1 className="lg:text-right">founders</h1>
      </div>

      <div className="grid gap-[40px] mb-[40px]">
        {founders.map((founder, index) => (
          <Founder_card
            key={founder.title}
            founder={founder}
            reverse={index === 1 ? true : false}
          />
        ))}
      </div>
    </div>
  )
}
export default Founders
