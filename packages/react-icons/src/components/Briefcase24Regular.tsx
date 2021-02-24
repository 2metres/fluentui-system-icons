import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Briefcase24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 3h6.5c.38 0 .7.28.74.65l.01.1V7h1.75C19.55 7 21 8.46 21 10.25v6.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 16.75v-6.5C3 8.45 4.46 7 6.25 7H8V3.75c0-.38.28-.7.65-.74l.1-.01h6.5-6.5zm9 5.5H6.25c-.97 0-1.75.78-1.75 1.75v6.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75v-6.5c0-.97-.78-1.75-1.75-1.75zm-3.25-4h-5V7h5V4.5z" fill={primaryFill} /></svg>;
};

export default Briefcase24Regular;