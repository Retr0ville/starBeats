/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const Revolution = () => (
  <div>
    <section className="tw-relative lg:tw-min-h-[660px]">
      <div className="tw-flex tw-justify-end tw-w-full lg:tw-h-[660px] md:tw-absolute md:tw-right-0  md:tw-top-0 md:tw-w-1/2 md:tw-h-[448px]">
        <div className="tw-relative md:tw-max-w-[545px] lg:tw-max-w-[600px] 2xlalt:tw-max-w-[800px] 3xlalt:tw-max-w-[1000px]">
          <img
            src="images/cards.png"
            alt="cards"
            className="tw-absolute tw-w-[325px] tw-bottom-0 tw-z-0 md:tw-w-[385px] lg:tw-w-[420px] 2xlalt:tw-w-560px 3xlalt:tw-w-[670px]"
          />
          <div>
            <img
              src="images/person-singing.jpg"
              alt="person"
              className="t-max-w-[120%]"
            />
          </div>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-justify-center md:tw-h-[448px] lg:tw-h-[660px]">
        <div
          className="tw-grid xlalt:tw-grid-cols-12 tw-grid-cols-4 md:tw-grid-cols-8 lg:tw-grid-cols-12
        2xlalt:tw-grid-cols-[repeat(12,_84px)]  md:tw-gap-x-6 lg:tw-px-8 tw-px-4 tw-gap-x-4 2xlalt:tw-gap-y-16 2xlalt:tw-gap-x-8  tw-gap-y-8 xl:tw-gap-y-12 tw-justify-center"
        >
          <div className="tw-col-span-4 lg:tw-col-span-6 tw-mb-8">
            <h2 className="tw-p-0 tw-text-white font-bebas tw-font-normal tw-text-[40px] tw-leading-[44px] tw-tracking-normal lg:tw-text-[62px] lg:tw-leading-[64px] tw-mb-8 lg:tw-mb-12 ">
              A Revolutionary Music Identification Tool for Creators
            </h2>
            <p className="tw-text-[#9f9f9f] tw-font-light tw-text-[14px] tw-leading-[24px] tw-tracking-[.2px]  md:tw-text-[16px] md:tw-leading-7 ">
              From producers, to artists, to record labels, to music publishers
              - Beat ID changes the game for all creators alike. With Beat ID,
              you'll have access to data and information on where and how your
              copyrights are being used across global social applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Revolution;
