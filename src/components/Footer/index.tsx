import React, { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [mail, setMail] = useState('');
  const [validMail, setValidMail] = useState(false);

  useEffect(
    () => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
      setValidMail(isValid);
    },
    [mail],
  );

  return (
    <div>
      <div className="tw-bg-black">
        <div className="">
          <section className="ssm:tw-flex ssm:tw-flex-col ssm:tw-items-center ssm:tw-py-20 ssm:tw-px-6 tw-py-7 tw-px-6 tw-border-b-[#ffffff1f] tw-border-b-[1px] tw-border-solid">
            <h3 className="ssm:tw-mb-6 tw-text-[17px] tw-p-0 tw-mb-8 tw-font-[500] tw-leading-[1.65] tw-tracking[.2px] tw-text-white tw-text-center">
              Yes! Send me personalized tips for shopping and selling on BeatStars.
            </h3>
            <div>
              <form action="POST" className="ssm:tw-max-w-[484px] ssm:tw-flex-row ssm:tw-w-[484px] ssm:tw-items-stretch ssm:tw-p-2 ssm:tw-bg-[#282828] ssm:tw-rounded-[5px] tw-flex tw-flex-col tw-items-center ">
                <div className="tw-text-[#707070] tw-flex tw-items-center tw-justify-start tw-w-full tw-h-16 tw-bg-[#282828] tw-rounded[5px] ssm:tw-flex-1  ssm:tw-h-12">
                  <FaEnvelope size="49" className="tw-text-[28px] tw-p-5  tw-inline-block ssm:tw-p-[8px_16px_8px_8px]" />
                  <input onChange={(e) => { setMail(e.target.value); }} required type="email" placeholder="Enter your e-mail" className="tw-w-full tw-text-xs tw-leading-[1.5] tw-font-[700] tw-text-white tw-tracking-normal tw-bg-transparent tw-border-0 tw-border-none ssm:tw-mr-5 focus-visible:tw-outline-none" />
                </div>
                <button type="submit" disabled={!validMail} onClick={() => { }} className="disabled:tw-text-[#ffffff33] tw-text-white tw-w-100 tw-h-16 tw-text-[18px] tw-font-[500] tw-items-center tw-tracking-normal tw-bg-[#005ff8]  tw-border-0 tw-border-none tw-rounded-[5px] disabled:tw-bg-[#26262680] tw-cursor-auto ssm:tw-w-[112px] tw-min-w-[112px] ssm:tw-h-12 tw-mt-0 ssm:tw-text-[16px] ssm:tw-leading-[1.5]">
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
        <div>
          <div>
            <div>
              <section>
                frodo
              </section>
            </div>
          </div>
        </div>
        <div>Copy</div>
      </div>
    </div>
  );
};

export default Footer;
