/* eslint-disable react/require-default-props */
import * as React from 'react';

function Buttn({
  color,
  classNames,
  children,
}: {
  color: string;
  classNames?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`tw-w-full ${classNames}`}>
      <a
        href="#hero"
        className={`tw-bg-[${color}] tw-px-5 tw-py-3 tw-border-0 tw-border-transparent tw-border-solid tw-rounded-md tw-font-medium tw-text-base tw-tracking-normal tw-text-white`}
      >
        {children}
      </a>
    </div>
  );
}

export default Buttn;
