import classNames from 'classnames';
import React from 'react';

type Props = {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  small?: boolean;
  large?: boolean;
  outline?: boolean;
};

// TODO: share style with ButtonLink
const button =
  'inline-flex items-center justify-center rounded-full py-2 px-4 drop-shadow border-2 border-emerald-300';
const defaultButtonStyle =
  'bg-emerald-300 text-slate-600 transition-colors hover:bg-slate-800 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2';
const outlineButtonStyle =
  'bg-white font-bold text-slate-600 transition-colors hover:bg-emerald-300 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2';

export const Button: React.FC<Props> = ({
  onClick,
  className,
  type = 'button',
  outline = false,
  small = false,
  large = false,
  children,
}) => {
  const styles = classNames(
    className,
    button,
    !outline && defaultButtonStyle,
    outline && outlineButtonStyle,
    { 'w-full px-8 py-3 md:text-lg': large },
    { 'px-3 py-1 text-sm font-medium': small }
  );

  return (
    // mute linter because dynamic type assignment is not allowed
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} type={type} className={styles}>
      {children}
    </button>
  );
};
