import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
  to: string;
  className?: string;
  newWindow?: boolean;
  small?: boolean;
  large?: boolean;
  outline?: boolean;
};

const button =
  'inline-flex items-center justify-center rounded-full py-2 px-4  drop-shadow';
const defaultButtonStyle =
  'btn border-2 border-emerald-300 bg-emerald-300 font-bold text-slate-600 transition-colors hover:bg-slate-800 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2';
const outlineButtonStyle =
  'btn-brand  border-emerald-300 bg-white text-slate-600 hover:bg-emerald-300 hover:text-slate-600';

// TODO: Refactor all those link components to share more logic
export const ButtonLink: React.FC<Props> = ({
  to,
  className = '',
  newWindow = false,
  outline = false,
  small = false,
  large = false,
  children,
}) => {
  const styles = classNames(
    className,
    button,
    defaultButtonStyle,
    outline && outlineButtonStyle,
    { 'w-full px-8 py-3 md:text-lg': large },
    { 'px-3 py-1 text-sm font-medium': small }
  );

  if (newWindow) {
    return (
      <a href={to} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};
