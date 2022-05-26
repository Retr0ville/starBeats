import React from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

export default function SearchInput() {
  return (
    <form action="post" className="tw-m-0 tw-p-0 tw-flex tw-items-center tw-nowrap">
      <button title="search beats" type="button" className="center tw-p-0 tw-rounded-[50%] tw-h-9 tw-pl-[6px] tw-w-10 tw-leading-10 tw-shrink-0 tw-bg-transparent">
        <span className="tw-leading-6 tw-font-extralight">
          <FaSearch color="#b8b8b8b8" fontSize={13} />
        </span>
      </button>
      <input name="beats-search" id="beats-search" title="search beats" placeholder="What are you looking for?" className="tw-rounded-none tw-border-none tw-w-full tw-bg-transparent tw-font-normal tw-text-xs tw-leading-[18px] tw-text-white focus-visible:tw-outline-none" />
      <div className="tw-hidden lg:tw-flex">
        <button type="button" className="dropdown-menu center tw-relative tw-top-[-1px]  tw-p-4  tw-bg-transparent tw-h-9 tw-text-[13px] tw-text-center tw-text-[#b8b8b8] tw-rounded-r-[15px] tw-cursor-pointer ">
          <span>Tracks</span>
          <span className="tw-flex tw-items-center tw-relative tw-top-[2.4px] tw-ml-[6px] tw-text-[8px]">
            <FaChevronDown />
          </span>
        </button>
      </div>
    </form>
  );
}
