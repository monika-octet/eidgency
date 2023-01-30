import React, { FC, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

const Services: FC = () => {
  const [progress, setProgress] = useState(0)

  return (
    <section id="services" className="bg-blue text-[#F9FFEB]">
      <Parallax
        onProgressChange={(progress) =>
          setProgress(Math.floor(progress * 100))
        }>
        <div className="container pt-16 pb-20 lg:pt-32 lg:pb-36 flex flex-col">
          <h2 className="text-64x lg:text-158x lg:max-w-3xl text-primary mb-16 lg:mb-36">
            Services that set you up for success.
          </h2>

          <div>
            <ServiceItem className="pb-12">
              <ServiceTitle
                title="WEB 2.0"
                lowest={'80%'}
                className="max-w-[50%] lg:w-[232px] lg:ml-auto lg:col-span-3"
                progress={progress}
              />
              <p className="text-34x lg:col-span-5 lg:max-w-[575px] relative z-40">
                Programmatic advertising, blockchain enabled strategy{' '}
              </p>
            </ServiceItem>

            <ServiceItem className="pb-12">
              <ServiceTitle
                title="WEB 2.5"
                lowest={'40%'}
                className="max-w-[75%] lg:w-[500px] lg:ml-auto lg:col-span-4"
                progress={progress}
              />
              <p className="text-34x lg:col-span-5 lg:max-w-[575px] relative z-40">
                End to end creative, campaigns, strategy and services
              </p>
            </ServiceItem>

            <ServiceItem>
              <ServiceTitle
                title="WEB 3.0"
                lowest={'30%'}
                className="max-w-[95%] lg:w-[500px] lg:ml-auto lg:col-span-5"
                progress={progress}
              />
              <p className="text-34x lg:col-span-5 lg:max-w-[575px] relative z-40">
                Elevate your brand and step into the world of web 3.0
              </p>
            </ServiceItem>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

const ServiceTitle = ({
  title,
  className,
  progress,
  lowest
}: {
  title: string
  className: string
  progress: number
  lowest: string
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <Parallax
      onExit={() => setVisible(false)}
      onEnter={() => setVisible(true)}
      className={`relative z-10 mb-6 pr-4 ${className}`}>
      <h3
        className={`text-primary text-24x lg:ml-10 py-2  text-right relative secondary-font font-normal`}>
        {title}
        <span
          style={{ width: visible ? '120%' : '60%' }}
          className={`lg:hidden absolute h-full bg-[#141414] -top-1 -right-2 transition-all -z-10 ease-in-out delay-500 duration-1000`}
        />
      </h3>
      <span
        style={{ width: visible ? '100%' : lowest }}
        className={`hidden lg:block lg:absolute h-full bg-[#141414] -top-1 -right-2 transition-all -z-10 ease-in-out delay-500 duration-1000`}
      />
    </Parallax>
  )
}

const ServiceItem = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={`lg:grid lg:grid-cols-10 lg:gap-10 ${className}`}>
    {children}
  </div>
)

export default Services
