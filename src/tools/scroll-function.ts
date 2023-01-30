import { RefObject } from 'react'

export const handleScroll = (element: RefObject<HTMLDivElement>) => {
  const container = element.current
  if (container) {
    const { top, bottom } = container.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const isTopInView = top < windowHeight
    const isBottomInView = bottom > 0

    if (isTopInView && isBottomInView) {
      return true
    } else {
      return false
    }
  }
}
