import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const LineHorizontal520Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2.5 6a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M2 12.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2.5 15a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
};

export default LineHorizontal520Regular;