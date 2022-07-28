// eslint-disable-next-line quotes
import React from "react";
import Buttn from '../Buttn';

const Discover = () => (
  <div className="">
    <div className="tw-h-[320px] md:tw-h-[465px] lg:tw-h-[620px] tw-relative tw-z-10 after:tw-bg-discover after:tw-absolute after:tw-top-0 after:tw-bottom-0 after:tw-right-0 after:tw-left-0 after:tw-bg-cover after:tw-bg-full after:tw-z-[1]">
      <div className="tw-absolute tw-top-0 tw-bottom-0 tw-right-0 tw-left-0 tw-flex tw-items-center tw-justify-center tw-z-10 tw-flex-col tw-text-center tw-px-6 md:tw-px-16 lg:tw-px-20 2xlalt:tw-px-32">
        <h2 className="tw-text-[40px] tw-leading-[44px] tw-tracking-normal font-bebas tw-font-normal tw-text-white tw-pb-6] lg:tw-text-[62px] lg:tw-leading-[64px] tw-max-w-[300px] md:tw-max-w-[500px] lg:tw-max-w-[600px] tw-pb-6 tw-text-center">
          Discover your music&apos;s digital footprint with beat id
        </h2>
        <Buttn color="#005ff8" classNames="tw-px-5 tw-py-3 tw-rounded-5">Get started</Buttn>
      </div>
    </div>
  </div>
);

export default Discover;
