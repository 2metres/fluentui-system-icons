import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarDismiss24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.48 3.02a.5.5 0 000 .71l1.77 1.77-1.76 1.77a.5.5 0 10.7.7l1.77-1.76 1.77 1.77a.5.5 0 10.7-.71l-1.76-1.77 1.77-1.77a.5.5 0 00-.7-.7l-1.78 1.76-1.77-1.77a.5.5 0 00-.7 0z" fill={primaryFill} /><path d="M11.02 17H2.88A1 1 0 003 19h8.17a6.52 6.52 0 01-.15-2z" fill={primaryFill} /><path d="M11.5 15H3a1 1 0 01-.12-2h9.93a6.5 6.5 0 00-1.31 2z" fill={primaryFill} /><path d="M3 11a1 1 0 01-.12-2H21a1 1 0 01.12 2H3z" fill={primaryFill} /><path d="M21 5H2.88A1 1 0 003 7h18.12A1 1 0 0021 5z" fill={primaryFill} /></svg>;
};

export default TextGrammarDismiss24Filled;