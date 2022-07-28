/* eslint-disable quotes */
/* eslint-disable max-len */
import * as React from "react";
import Buttn from "../Buttn";

const Start = () => (
  <div className="tw-py-[80px] md:tw-py-16">
    <div>
      <div className="tw-overflow-hidden tw-p-[0_15px_15px_15px] tw-relative tw-w-full 2xlalt:tw-p-[0_0_30px_0] ssm:tw-p-[0_24px_20px_24px]">
        <div className="tw-max-w-[1300px] tw-m-auto tw-w-full">
          <section className="tw-flex tw-flex-col md:tw-flex-col-reverse">
            <div>
              <div className="tw-relative tw-text-center">
                <img
                  src="images/beatid-dashboard.png"
                  alt="dashboard"
                  className="tw-max-w-full"
                />
              </div>
            </div>
            <div className="md:tw-text-center tw-mb-12">
              <h2 className="tw-p-[0_0_8px] font-bebas tw-font-normal tw-leading-[44px] tw-tracking-normal tw-text-white tw-text-[40px] lg:tw-text-[62px] lg:tw-leading-[64px]">
                START TRACKING YOUR MUSIC
              </h2>
              <p className="tw-font-light tw-text-[14px] tw-tracking-[.2px] tw-mb-[24px] tw-leading-6 tw-text-[#9f9f9f] md:tw-max-w-[495px] md:tw-mx-auto md:tw-text-[16px] md:tw-leading-7">
                Never gonna tell a lie and hurt you Never gonna give you up,
                Never gonna let you down
              </p>
              <Buttn
                classNames="tw-inline-block tw-justify-[unset] md:tw-justify-[unset]"
                color="#005ff8"
              >
                Get Started
              </Buttn>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Start;
