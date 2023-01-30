import * as React from 'react'
import { Link, HeadFC } from 'gatsby'
import Content_Container from '../layout/Content_Container'
import Contact_us from '../components/ContactUs'

const NotFoundPage = () => {
  const [visible, setVisible] = React.useState(true)

  return (
    <Content_Container background={visible ? 'bg-[#151315]' : 'bg-[#f1f3e5]'}>
      <div className="h-[50vh] mx-auto container flex flex-col justify-center">
        <h2 className="text-white text-4xl secondary-font">
          Sorry , we couldn’t find what you were looking for.
        </h2>

        <Link to="/" target="_blank" className="primary-btn mx-auto !px-10">
          Go back
        </Link>
      </div>

      <Contact_us />
    </Content_Container>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <>
    <title>Not found</title>
    <meta
      name="description"
      content="We are a media agnecy that enables advertising and design for the new era of the internet."
    />
  </>
)
