import React, { FC } from 'react'

interface Props {
  children: React.ReactNode
  background: string
}

const Content_Container: FC<Props> = ({ children, background }) => {
  return (
    <main
      className={`overflow-hidden ${background} 
      transition-all ease-in-out duration-500`}>
      {children}
    </main>
  )
}

export default Content_Container
