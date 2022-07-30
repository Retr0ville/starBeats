/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useState } from 'react';
import {
  FaArrowDown, FaEnvelope, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaSoundcloud,
} from 'react-icons/fa';

const Footer = () => {
  const [mail, setMail] = useState('');
  const [validMail, setValidMail] = useState(false);
  const [arrSection, setArrSection] = useState('');
  const [showSection, setShowSection] = useState(() => window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setShowSection(window.innerWidth > 1024);
      setArrSection('');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <div className="tw-pb-0 sxlalt:tw-p-[0_0_30px] ssm:tw-p-[0_24px_20px] tw-relative tw-w-full tw-p-[0_15px_15px] tw-overflow-hidden tw-border-b-[1px] tw-border-b-solid tw-border-[#ffffff1f] lg:tw-border-b-0 lg:tw-border-none">
          {/* Start 'er */}
          <div className="tw-w-full tw-max-w-[1300px] tw-m-auto">
            <section className="tw-flex tw-items-start tw-flex-col lg:tw-flex-row tw-p-[40px_0] lg:tw-p-[48px_0_80px] tw-max-w-[320px] lg:tw-max-w-none tw-m-[0_auto] tw-border-b-0 tw-border-none lg:tw-m-0 lg:tw-border-b-[1px] lg:tw-border-solid lg:tw-border-[#ffffff1f] ">
              <div className="tw-flex tw-justify-center tw-flex-col lg:tw-order-1 tw-order-2 tw-w-full lg:tw-w-[unset] tw-mb-8 lg:tw-mb-[unset] ">
                <h1 className="tw-hidden lg:tw-block tw-mb-4 tw-whitespace-nowrap tw-p-0 tw-text-[17px] tw-font-medium tw-leading-[1.65] tw-tracking-[.2px] tw-text-white">
                  Take Beats on the GO!
                </h1>
                <div className="lg:tw-flex-col tw-flex tw-justify-between tw-w-full">
                  <a href="/" className="lg:tw-m-[0_0_16px] tw-mr-2 lg:tw-w-[162px] tw-w-[145px] lg:tw-h-12 tw-h-[43px]">
                    <img src="/images/appstore.png" alt="apple" />
                  </a>
                  <a href="/" className="lg:tw-w-[162px] tw-w-[145px] lg:tw-h-12 tw-h-[43px]">
                    <img src="/images/googleplay.png" alt="gplay" />
                  </a>
                </div>
              </div>
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-order-1 lg:tw-order-2 tw-mb-4 lg:tw-mb-[unset] tw-w-full tw-justify-evenly">
                <div>
                  <section>
                    <header className="tw-flex tw-items-center tw-justify-between tw-mb-4" role="button" onKeyDown={() => { }} onClick={() => (arrSection === 'beats' ? setArrSection('') : setArrSection('beats'))}>
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <h2 className="tw-mr-2 tw-p-0 tw-text-[17px] tw-font-medium tw-tracking-[.2px] tw-leading-[1.65] tw-text-white">
                          Beatstars
                        </h2>
                      </div>
                      <FaArrowDown className={`tw-text-[12px] tw-text-white tw-transition-transform ${!showSection ? 'tw-inline-block' : 'tw-hidden'} ${arrSection === 'beats' ? 'tw-rotate-180' : 'tw-rotate-0'}`} />
                    </header>
                    <div className={`tw-overflow-y-hidden ${(showSection || (arrSection === 'beats')) ? 'tw-h-full tw-max-h-full tw-block' : 'tw-h-0 tw-max-h-0 tw-hidden'}`}>
                      <ul className="tw-mb-4">
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">About Us</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Jobs</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Merch</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Blog</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px]"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Beatstart.World</a></li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div>
                  <section>
                    <header className="tw-flex tw-items-center tw-justify-between tw-mb-4" role="button" onKeyDown={() => { }} onClick={() => (arrSection === 'supp' ? setArrSection('') : setArrSection('supp'))}>
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <h2 className="tw-mr-2 tw-p-0 tw-text-[17px] tw-font-medium tw-tracking-[.2px] tw-leading-[1.65] tw-text-white">
                          Support
                        </h2>
                      </div>
                      <FaArrowDown className={`tw-text-[12px] tw-text-white tw-transition-transform ${!showSection ? 'tw-inline-block' : 'tw-hidden'} ${arrSection === 'supp' ? 'tw-rotate-180' : 'tw-rotate-0'}`} />
                    </header>
                    <div className={`tw-overflow-y-hidden tw-w-full ${(showSection || (arrSection === 'supp')) ? 'tw-h-full tw-max-h-full tw-block' : 'tw-h-0 tw-max-h-0 tw-hidden'}`}>
                      <ul className="tw-mb-4 tw-w-full">
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Prices</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Start Selling</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Sign up</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Login</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Helpdesk</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Contact us</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[153px] tw-mb-3"><a href="/" className="tw-cursor-pointer  tw-flex tw-items-center tw-text-[#b8b8b8]">Do Not Sell My Personal Information</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px]"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">GDPR</a></li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div>
                  <section className="">
                    <header className="tw-flex tw-items-center tw-justify-between tw-mb-4" role="button" onKeyDown={() => { }} onClick={() => (arrSection === 'press' ? setArrSection('') : setArrSection('press'))}>
                      <div className="tw-flex tw-items-center tw-justify-between">
                        <h2 className="tw-mr-2 tw-p-0 tw-text-[17px] tw-font-medium tw-tracking-[.2px] tw-leading-[1.65] tw-text-white">
                          Press
                        </h2>
                      </div>
                      <FaArrowDown className={`tw-text-[12px] tw-text-white tw-transition-transform ${!showSection ? 'tw-inline-block' : 'tw-hidden'} ${arrSection === 'press' ? 'tw-rotate-180' : 'tw-rotate-0'}`} />
                    </header>
                    <div className={`tw-overflow-y-hidden ${(showSection || (arrSection === 'press')) ? 'tw-h-full tw-max-h-full tw-block' : 'tw-h-0 tw-max-h-0 tw-hidden'}`}>
                      <ul className="tw-mb-4">
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Vulture</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Billlboard</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Forbes</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-3"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Complex</a></li>
                        <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px]"><a href="/" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">Genius</a></li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div className="tw-w-full lg:tw-w-[unset] tw-order-3">
                <h1 className="tw-hidden lg:tw-block tw-text-white tw-mb-4 tw-p-0 tw-text-[17px] tw-font-medium tw-leading-[1.65] tw-tracking-[.2px]">Social Media</h1>
                <ul className="tw-mb-4 tw-flex tw-justify-between lg:tw-flex-col lg:tw-justify-start">
                  <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-0 lg:tw-mb-3">
                    <a href="#icons" id="icons" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">
                      <FaYoutube className="lg:tw-text-[16px] lg:tw-mr-2 lg:tw-p-[unset] lg:tw-m-[unset] lg:tw-text-inherit lg:tw-rounded-[unset] lg:tw-shadow-none tw-p-3 tw-m-0 tw-text-[24px] tw-text-white tw-rounded-[5px] tw-bg-[#282828] lg:tw-bg-[transparent]" size={`${showSection ? '' : '48.2px'}`} />
                      <span className="tw-hidden lg:tw-flex">
                        Youtube
                      </span>
                    </a>
                  </li>
                  <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-0 lg:tw-mb-3">
                    <a href="#icons" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">
                      <FaInstagram className="lg:tw-text-[16px] lg:tw-mr-2 lg:tw-p-[unset] lg:tw-m-[unset] lg:tw-text-inherit lg:tw-rounded-[unset] lg:tw-shadow-none tw-p-3 tw-m-0 tw-text-[24px] tw-text-white tw-rounded-[5px] tw-bg-[#282828] lg:tw-bg-[transparent]" size={`${showSection ? '' : '48.2px'}`} />
                      <span className="tw-hidden lg:tw-flex">
                        instagram
                      </span>
                    </a>
                  </li>
                  <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-0 lg:tw-mb-3">
                    <a href="#icons" id="icons" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">
                      <FaFacebookF className="lg:tw-text-[16px] lg:tw-mr-2 lg:tw-p-[unset] lg:tw-m-[unset] lg:tw-text-inherit lg:tw-rounded-[unset] lg:tw-shadow-none tw-p-3 tw-m-0 tw-text-[24px] tw-text-white tw-rounded-[5px] tw-bg-[#282828] lg:tw-bg-[transparent]" size={`${showSection ? '' : '48.2px'}`} />
                      <span className="tw-hidden lg:tw-flex">
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-0 lg:tw-mb-3">
                    <a href="#icons" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">
                      <FaTwitter className="lg:tw-text-[16px] lg:tw-mr-2 lg:tw-p-[unset] lg:tw-m-[unset] lg:tw-text-inherit lg:tw-rounded-[unset] lg:tw-shadow-none tw-p-3 tw-m-0 tw-text-[24px] tw-text-white tw-rounded-[5px] tw-bg-[#282828] lg:tw-bg-[transparent]" size={`${showSection ? '' : '48.2px'}`} />
                      <span className="tw-hidden lg:tw-flex">
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li className="tw-text-[14px] tw-leading-[1.71] tw-tracking-[.3px] tw-max-w-[150px] tw-mb-0 lg:tw-mb-3">
                    <a href="#icons" className="tw-cursor-pointer tw-flex tw-items-center tw-text-[#b8b8b8]">
                      <FaSoundcloud className="lg:tw-text-[16px] lg:tw-mr-2 lg:tw-p-[unset] lg:tw-m-[unset] lg:tw-text-inherit lg:tw-rounded-[unset] lg:tw-shadow-none tw-p-3 tw-m-0 tw-text-[24px] tw-text-white tw-rounded-[5px] tw-bg-[#282828] lg:tw-bg-[transparent]" size={`${showSection ? '' : '48.2px'}`} />
                      <span className="tw-hidden lg:tw-flex">
                        Soundcloud
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>Copy</div>
    </div>
  );
};

export default Footer;
