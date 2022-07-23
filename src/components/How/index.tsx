import * as React from 'react';

function How() {
  return (
    <div className="tw-px-0 md:tw-py-20 tw-py-12 2xlalt:tw-py-32 tw-bg-[#0a0a09]">
      <div className="tw-relative tw-overflow-hidden tw-w-full tw-pl-[15px] tw-pr-[15px] tw-pb-[15px] tw-pt-[0]  ssm:tw-pl-[24px] ssm:tw-pr-[24px] ssm:tw-pb-[20px]  sxlalt:tw-px-[0] sxlalt:tw-pb-[30px]">
        <div className="tw-w-full tw-max-w-[1300px] tw-m-auto ">
          <div className="tw-mb-12 2xlalt:tw-mb-20">
            <h2 className="tw-p-0 tw-text-white font-bebas tw-font-normal tw-text-[40px] tw-leading-[44px] tw-tracking-normal tw-text-center lg:tw-text-[62px] lg:tw-leading-[64px]  ">
              Here
              {'\''}
              s how it works
            </h2>
          </div>
          <div className="tw-flex tw-flex-col md:tw-flex-row ">
            <div className="tw-flex-row md:tw-flex-col tw-flex tw-items-center tw-basis-full tw-mb-8 md:tw-basis-1/3">
              <div className="tw-w-16 tw-h-16 tw-mr-6 md:tw-mr-0 md:tw-mb-6">
                <img src="images/icon-upload.svg" alt="upload" className="tw-max-w-full" />
              </div>
              <p className="tw-text-white tw-flex tw-items-center  tw-font-[300] tw-text-[16px] tw-leading-[28px] tw-tracking-[.2px] 2xlalt:tw-font-[500] md:tw-text-[18px] 2xlalt:tw-text-[20px] md:tw-leading-[32px] 2xlalt:tw-leading-[28px] 2xlalt:tw-tracking-[0] md:tw-text-center md:tw-max-w-[180px] 2xlalt:tw-max-w-[unset]">
                Upload your original music
              </p>
            </div>
            <div className="tw-flex-row md:tw-flex-col tw-flex tw-items-center tw-basis-full tw-mb-8 md:tw-basis-1/3">
              <div className="tw-w-16 tw-h-16 tw-mr-6 md:tw-mr-0 md:tw-mb-6">
                <img src="images/icon-search.svg" alt="search" className="tw-max-w-full" />
              </div>
              <p className="tw-text-white  tw-font-[300] tw-text-[16px] tw-leading-[28px] tw-tracking-[.2px] 2xlalt:tw-font-[500] md:tw-text-[18px] 2xlalt:tw-text-[20px] md:tw-leading-[32px] 2xlalt:tw-leading-[28px] 2xlalt:tw-tracking-[0] md:tw-text-center md:tw-max-w-[180px] 2xlalt:tw-max-w-[unset]">
                Beat ID searches the web
              </p>
            </div>
            <div className="tw-flex-row md:tw-flex-col tw-flex tw-items-center tw-basis-full tw-mb-8 md:tw-basis-1/3">
              <div className="tw-w-16 tw-h-16 tw-mr-6 md:tw-mr-0 md:tw-mb-6">
                <img src="images/icon-link.svg" alt="link" className="tw-max-w-full" />
              </div>
              <p className="tw-text-white  tw-font-[300] tw-text-[16px] tw-leading-[28px] tw-tracking-[.2px] 2xlalt:tw-font-[500] md:tw-text-[18px] 2xlalt:tw-text-[20px] md:tw-leading-[32px] 2xlalt:tw-leading-[28px] 2xlalt:tw-tracking-[0] md:tw-text-center md:tw-max-w-[180px] 2xlalt:tw-max-w-[unset]">
                You get links to where it exists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How;
