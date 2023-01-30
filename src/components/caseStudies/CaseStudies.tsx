import * as React from 'react'
import Case_studies_card from './CaseStudiesCard'
import { caseStudies } from '../../data/caseStudies'

interface Case_studiesProps {}

export type Casestudy = {
  title: string
  name: string
  scrollText: string
  mainImage: string
  layeredImage: string
  slug:string
}

const Case_studies: React.FC<Case_studiesProps> = ({ }) => {
  

  return (
    <div className="grid sm:grid-cols-2 pb-20">
      {caseStudies.map((casestudy, index) => (
        <Case_studies_card
          key={casestudy.title}
          casestudy={casestudy}
          
        />
      ))}
    </div>

  )
}
export default Case_studies
