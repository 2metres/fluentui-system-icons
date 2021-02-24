import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const CalendarSettings20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z" fill={primaryFill} /><path d="M10.42 15.94a2 2 0 000-2.88l-.15-.14c.17-.49.41-.94.72-1.33l.2.06a2 2 0 002.51-1.45l.07-.3a4.38 4.38 0 011.46 0l.07.3a2 2 0 002.51 1.45l.2-.06c.3.4.55.84.72 1.33l-.15.14a2 2 0 000 2.88l.15.14c-.17.49-.41.94-.72 1.33l-.2-.06a2 2 0 00-2.51 1.45l-.07.3a4.38 4.38 0 01-1.46 0l-.07-.3a2 2 0 00-2.51-1.45l-.2.06a4.7 4.7 0 01-.72-1.33l.15-.14zm2.85-1.44c0 .7.55 1.27 1.23 1.27.68 0 1.23-.57 1.23-1.27 0-.7-.55-1.27-1.23-1.27-.68 0-1.23.57-1.23 1.27z" fill={primaryFill} /></svg>;
};

export default CalendarSettings20Regular;