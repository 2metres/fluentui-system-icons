import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BookInformation24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.25 7a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M11.5 9.75v5a.75.75 0 001.5 0v-5a.75.75 0 00-1.5 0z" fill={primaryFill} /><path d="M4 4.5A2.5 2.5 0 016.5 2H18a2.5 2.5 0 012.5 2.5v14.25c0 .41-.34.75-.75.75H5.5a1 1 0 001 1h13.25a.75.75 0 010 1.5H6.5A2.5 2.5 0 014 19.5v-15zM19 18V4.5a1 1 0 00-1-1H6.5a1 1 0 00-1 1V18H19z" fill={primaryFill} /></svg>;
};

export default BookInformation24Regular;