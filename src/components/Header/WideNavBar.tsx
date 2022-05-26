import React from 'react';
import NavItem from './NavItem';

export default function WideNavbar() {
  return (
    <div className="tw-w-full center tw-hidden tw-h-12 lg:tw-flex tw-items-center tw-px-8 tw-bg-[#1a1a1a]">
      <div className="tw-container tw-h-full tw-max-w-[1360px]">
        <nav className="tw-flex tw-items-center tw-h-full">
          <NavItem
            text="Feed"
          />
          <NavItem
            text="Tracks"
          />
          <NavItem
            text="Distribution"
          />
          <NavItem
            text="Publishing"
          />
          <NavItem text="Beat ID">
            <div className="tw-ml-2 tw-rounded-[999px] tw-bg-[#fc0] center tw-font-medium  tw-text-xs tw-text tw-leading-[18px] tw-p-[2px_8px]">
              <span className="tw-flex tw-text-[#0a0a09] tw-justify-center tw-w-full">
                New
              </span>
            </div>
          </NavItem>
          <NavItem text="Gift Cards">
            <div className="tw-ml-2 tw-rounded-[999px] tw-bg-[#fc0] center tw-font-medium  tw-text-xs tw-text tw-leading-[18px] tw-p-[2px_8px]">
              <span className="tw-flex tw-text-[#0a0a09] tw-justify-center tw-w-full">
                New
              </span>
            </div>
          </NavItem>
        </nav>
      </div>
    </div>
  );
}
