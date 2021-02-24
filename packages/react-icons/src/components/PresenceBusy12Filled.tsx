import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const PresenceBusy12Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6A6 6 0 110 6a6 6 0 0112 0z" fill={primaryFill} /></svg>;
};

export default PresenceBusy12Filled;