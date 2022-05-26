/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import DropdownButton from './DropdownButton';
import WideNavbar from './WideNavBar';
import SearchInput from './SearchInput';

const Header = () => (
  <>
    <div className="main-header tw-w-full center tw-bg-primary tw-px-4 md:tw-px-8 tw-h-16">
      <div className="tw-container tw-max-w-[1360px] tw-w-full tw-flex tw-nowrap tw-justify-between">
        <div className="left-nav-items tw-flex tw-items-center  tw-nowrap tw-bg-transparent">
          <div className="tw-w-6 tw-h-6 tw-mr-4">
            <img src="/images/logo-red.svg" alt="beat logo" width={24} height={24} />
          </div>
          <div className="tw-w-full md:tw-block tw-hidden  tw-h-9 tw-rounded-3xl tw-bg-[#383838] tw-border-[.5px] tw-divide-solid tw-divide-[#707070] md:tw-w-[268px] lg:tw-w-[346px] xlalt:tw-w-[425px] 2xlalt:tw-w-[508px] ">
            <SearchInput />
          </div>
        </div>
        <div className="right-nav-items tw-items-center tw-grid [grid-template-areas:_'_auth-items_._cart'] md:[grid-template-areas:_'explore_._create_._auth-items_._cart'] tw-grid-cols-[minmax(0,_max-content)_8px_minmax(0,_max-content)]  md:tw-grid-cols-[minmax(0,_max-content)_8px_minmax(0,_max-content)_16px_minmax(0,_max-content)_16px_minmax(0,_max-content)]">
          <div className="explore [grid-area:explore]">
            <div className="center">
              <DropdownButton
                className="tw-hidden lg:tw-flex"
                text="Explore"
              />
            </div>
          </div>
          <div className="create [grid-area:create]">
            <div className="center">
              <DropdownButton
                className="tw-hidden lg:tw-flex"
                text="Creator"
              />
            </div>
          </div>
          <div className="auth-items tw-h-full [grid-area:auth-items] tw-grid tw-items-center md:tw-grid-cols-[repeat(3,_minmax(0,_max-content))] tw-grid-rows-[auto] tw-grid-flow-col md:tw-gap-x-4">
            <button type="submit" className="center tw-text-[12px] tw-border-none tw-divide-x-0 tw-bg-transparent tw-m-0 tw-p-0 tw-text-center tw-text-[#9f9f9f] hover:tw-text-[#707070] tw-cursor-pointer ">
              <span className="center tw-whitespace-nowrap">Sign up</span>
            </button>
            <div className="md:tw-flex center tw-hidden tw-w-[1px] tw-h-[10px] tw-bg-[#707070]" />
            <button type="submit" className="md:tw-flex center tw-hidden  tw-text-[12px] tw-border-none tw-divide-x-0 tw-bg-transparent tw-m-0 tw-p-0 tw-text-center tw-text-[#9f9f9f] hover:tw-text-[#707070] tw-cursor-pointer  tw-flex-nowrap">
              <span className="center tw-whitespace-nowrap">Sign in</span>
            </button>
            <div className="center">
              <a href="#" className="center tw-hidden md:tw-flex tw-text-[12px] tw-font-medium tw-text-center tw-text-[#fff] tw-rounded-[5px] tw-p-[7px_12px] tw-cursor-pointer tw-bg-[#005ff8] hover:tw-bg-[#0b8aaf]">
                <span className="center tw-whitespace-nowrap ">Start Selling</span>
              </a>
            </div>
          </div>
          <div className="cart [grid-area:cart]">
            <DropdownButton>
              <FaCartPlus />
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
    <div className="tw-w-full">
      <div className="tw-h-[1px] tw-bg-[#262626]" />
    </div>
    <div className="tw-w-full tw-flex center  md:tw-hidden tw-px-4 tw-h-12 tw-bg-[#1a1a1a]">
      <div className="tw-w-full tw-h-9 tw-rounded-3xl tw-bg-[#383838] tw-border-[.5px] tw-divide-solid tw-divide-[#707070]">
        <SearchInput />
      </div>
    </div>
    <WideNavbar />
  </>
);
export default Header;
