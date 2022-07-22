import React from 'react';
import Marquee from './marquee';
import Mouse from './mouse';

const IntroducingBeatID = () => (
  <div id="hero" className="tw-w-full tw-flex tw-items-center">
    <div className=" tw-w-full ">
      <section className="tw-relative md:tw-px-8 tw-px-4 tw-flex tw-flex-col tw-pb-20 tw-w-full">
        <div className="tw-absolute tw-top-0 tw-bottom-[50%] tw-left-0 tw-right-0 tw-bg-gradient-to-b tw-from-[hsla(0,0%,100%,0.64)] tw-to-[hsla(0,0%,100%,0)] tw-opacity-20" />
        <div className="center tw-pt-6 tw-pb-[120px] tw-w-full">
          <div className="tw-container lg:tw-grid-rows-1 tw-w-full tw-max-w-[1360px] tw-grid tw-grid-cols-12 tw-gap-y-8">
            <div className="tw-w-full tw-col-span-12 lg:tw-col-span-6 tw-order-2 lg:tw-order-1">
              <div className="tw-inline-flex tw-w-full tw-items-center tw-justify-center md:tw-justify-start">
                <h1 className="tw-py-[10px] tw-uppercase tw-text-sm 2xlalt:tw-text-xl tw-tracking-[0.1px] md:tw-tracking-normal tw-text-[#fc0] md:tw-text-base tw-font-medium tw-mr-2">
                  Introducing
                </h1>
                <img className="tw-h-[18px] md:tw-h-6 tw-mt-1 tw-max-w-full" src="images/beat-id-logo.svg" alt="logo" />
              </div>
              <h1 className="tw-pb-6 tw-text-[40px] tw-leading-[44px] md:tw-text-[62px] md:tw-leading-[64px] tw-text-white 2xlalt:tw-text-8xl 2xlalt:tw-leading-[98px] md:tw-max-w-full tw-tracking-normal tw-font-normal tw-text-center md:tw-text-left font-bebas">
                Track Your Music Across Social Media
              </h1>
              <div className="tw-w-full tw-flex tw-items-center tw-justify-center md:tw-justify-start">
                <a href="#hero" className="tw-bg-[#005ff8] tw-px-5 tw-py-3 tw-border-0 tw-border-transparent tw-border-solid tw-rounded-md tw-font-medium tw-text-base tw-tracking-normal tw-text-white">
                  Get started
                </a>
              </div>
            </div>
            <div className=" tw-col-span-12 lg:tw-col-span-6 tw-order-1 lg:tw-order-2">
              <div className="tw-relative tw-h-0 tw-pb-[56.25%]">
                <iframe className="tw-absolute tw-top-0 tw-left-0 tw-max-w-none tw-w-full tw-h-full tw-rounded-[6px] tw-bg-[#0a0a09] tw-border-2 tw-p-0 tw-m-0 tw-divide-solid tw-border-[#707070] tw-box-content" title="Track Pros" src="https://player.vimeo.com/video/690845311?h=b89e1676f3" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen width="undefined" height="undefined" />
              </div>
            </div>
          </div>
        </div>
        <aside className="tw-absolute tw-overflow-hidden tw-bottom-0 tw-left-0 tw-right-0 tw-w-full">
          <div className="tw-flex tw-justify-center tw-w-full">
            <Mouse />
          </div>
          <div className="tw-relative tw-min-h-[80px] md:tw-min-w-[2794.44px] md:tw-min-h-[120px]  tw-mb-11 md:tw-mb-0  tw-min-w-[1811.92px]">
            <Marquee />
          </div>
        </aside>
      </section>
      <div className="tw-px-0 md:tw-py-20 tw-py-12 2xlalt:tw-py-32 tw-bg-[#0a0a09]">
        <div className="tw-relative tw-overflow-hidden tw-w-full tw-p-[0px 15px 15px] ssm:tw-p-[0px 24px 20px] sxlalt:tw-p-[0px 0px 30px]">
          <div className="tw-w-full tw-max-w-[1300px] tw-m-auto ">
            <div className="tw-mb-12 2xlalt:tw-mb-20">d</div>
            <div className=" t">d</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IntroducingBeatID;
