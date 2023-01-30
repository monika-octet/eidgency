import React, { FC, useEffect, useState } from 'react'

interface WebIntroItemProps {
  txt: string
  typeSpeed: number
  className?: string
  delay?: number
}

const Type_txt: FC<WebIntroItemProps> = ({
  txt,
  typeSpeed,
  className,
  delay
}) => {
  const [displayTxt, setDisplayTxt] = useState('')

  useEffect(() => {
    type()
  }, [])

  const type = () => {
    if (delay) {
      setTimeout(() => {
        for (let i = 0; i < txt.length; i++) {
          setTimeout(() => {
            setDisplayTxt((prev) => prev + txt[i])
          }, i * typeSpeed)
        }
      }, delay)
    }
  }

  return <p className={className}>{displayTxt}</p>
}

export default Type_txt
