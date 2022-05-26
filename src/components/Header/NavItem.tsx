/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';

// eslint-disable-next-line react/require-default-props
export default function NavItem({ children, text } : {children?: ReactElement, text?: string}) {
  return (
    <a href="#" className="center tw-self-stretch tw-mr-12 tw-group tw-border-transparent hover:tw-border-white tw-border-b-[1px]">
      <span className="tw-text-white tw-opacity-[0.6] group-hover:tw-opacity-[1] tw-leading-5 tw-text-[14px]">{text && text}</span>
      {children && children}
    </a>
  );
}
