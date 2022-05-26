import React, { ReactElement } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// eslint-disable-next-line react/require-default-props
export default function DropdownButton({ className = '', text, children } : {className?: string, text?: string, children?: ReactElement}) {
  return (
    <button type="button" className={`dropdown-menu center tw-relative tw-border-none tw-text-xs tw-leading-normal tw-px-3 tw-py-[6px]  tw-bg-transparent tw-text-center tw-text-[#9f9f9f] tw-rounded-[999px] tw-cursor-pointer hover:tw-bg-[#262626] hover:tw-text-white ${className}`}>
      <span>
        {children && children}
        {text && text}
      </span>
      <span className="lg:tw-flex tw-hidden tw-items-center tw-relative tw-top-[2.4px] tw-ml-2 tw-text-[8px]">
        <FaChevronDown />
      </span>
    </button>
  );
}
