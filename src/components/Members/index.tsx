// eslint-disable-next-line quotes
import * as React from "react";

const Members = () => (
  <div className="tw-mb-[128px]">
    <div className="tw-grid tw-justify-center tw-gap-y-8 tw-gap-x-8 tw-px-4 tw-grid-cols-4 md:tw-gap-x-6 md:tw-grid-cols-8 lg:tw-p-x-8 lg:tw-grid-cols-12 xlalt:tw-gap-y-12 2xlalt:tw-gap-y-16 2xlalt:tw-grid-cols-[repeat(12,_84px)]">
      <section className="tw-block tw-col-span-4 md:tw-col-span-8 lg:tw-col-span-12">
        <div className="tw-mb-6 tw-flex tw-items-center 2md:tw-justify-center lg:tw-mb-16">
          <h2 className="tw-text-[40px] tw-leading-[44px] tw-tracking-normal font-bebas tw-font-normal tw-text-white tw-text-left tw-p-0 tw-mr-3 tw-block ssm:tw-hidden 2md:tw-text-center lg:tw-text-[62px] lg:tw-leading-[64px] ">How our members use Beat ID</h2>
          <h2 className="tw-text-[40px] tw-leading-[44px] tw-tracking-normal font-bebas tw-font-normal tw-text-white tw-text-left tw-p-0 tw-mr-3 tw-hidden ssm:tw-block  2md:tw-text-center lg:tw-text-[62px] lg:tw-leading-[64px]">How our members use</h2>
          <img src="images/beat-id-logo.svg" alt="beat logo" className="tw-w-[136px] tw-mt-3 lg:tw-w-[219px] lg:tw-mt-5 tw-hidden ssm:tw-block" />
        </div>
        <div className="tw-grid tw-gap-y-6 tw-gap-x-6 tw-grid-cols-[1fr] tw-grid-rows-[1fr] md:tw-grid-cols-2">
          <div>
            <div className="tw-relative tw-h-0 tw-pb-[56.25%]">
              <iframe
                className="tw-absolute tw-top-0 tw-left-0 tw-max-w-none tw-w-full tw-h-full tw-rounded-[6px] tw-bg-[#0a0a09] tw-border-2 tw-p-0 tw-m-0 tw-divide-solid tw-border-[#707070] tw-box-content"
                title="Track Pros"
                src="https://player.vimeo.com/video/655466235?h=acd9f7fdc5"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                width="512"
                height="288"
              />
            </div>
          </div>
          <div>
            <div className="tw-relative tw-h-0 tw-pb-[56.25%]">
              <iframe
                className="tw-absolute tw-top-0 tw-left-0 tw-max-w-none tw-w-full tw-h-full tw-rounded-[6px] tw-bg-[#0a0a09] tw-border-2 tw-p-0 tw-m-0 tw-divide-solid tw-border-[#707070] tw-box-content"
                title="Track Pros"
                src="https://player.vimeo.com/video/655468431?h=6434ffe5b8&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                width="512"
                height="288"
              />
            </div>
          </div>
          <div>
            <div className="tw-relative tw-h-0 tw-pb-[56.25%]">
              <iframe
                className="tw-absolute tw-top-0 tw-left-0 tw-max-w-none tw-w-full tw-h-full tw-rounded-[6px] tw-bg-[#0a0a09] tw-border-2 tw-p-0 tw-m-0 tw-divide-solid tw-border-[#707070] tw-box-content"
                title="Track Pros"
                src="https://player.vimeo.com/video/655476537?h=04b68dc94e&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                width="512"
                height="288"
              />
            </div>
          </div>
          <div>
            <div className="tw-relative tw-h-0 tw-pb-[56.25%]">
              <iframe
                className="tw-absolute tw-top-0 tw-left-0 tw-max-w-none tw-w-full tw-h-full tw-rounded-[6px] tw-bg-[#0a0a09] tw-border-2 tw-p-0 tw-m-0 tw-divide-solid tw-border-[#707070] tw-box-content"
                title="Track Pros"
                src="https://player.vimeo.com/video/655491058?h=1d02d012fe&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                width="512"
                height="288"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Members;
