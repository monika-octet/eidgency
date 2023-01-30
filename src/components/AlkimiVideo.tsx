import React, { FC } from "react"

const AlkimiVideo: FC = () => {
  return (
    <section id="alkimi-video" className="">
      <div className="container py-[150px]">
        <h3 className="text-37x lg:text-64x mb-10 lg:mb-32 text-blue">
          We're leveraging the world's first decentralized Blockchain enabled ad exchange, using the technology to elevate your budgets and
          vision.
        </h3>

        <div className="lg:my-10 custom-img-wrapper !bg-blue pt-[10px] px-[10px] lg:px-[40px]">
          <div className="custom-img-wrapper-inner h-[200px] " style={{ paddingBottom: "56.66%" }}>
            <div className="h-full w-full">
              <iframe
                src="https://www.youtube.com/embed/asXUrMGbPsw?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>

        <a href="https://www.youtube.com/embed/asXUrMGbPsw?autoplay=1" target="_blank" className="primary-btn mx-auto lg:!-mt-10">
          watch video
        </a>
      </div>
    </section>
  )
}

export default AlkimiVideo
