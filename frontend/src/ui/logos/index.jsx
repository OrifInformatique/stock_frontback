import React from 'react';
import clsx from 'clsx';

const Logo = ({ className }) => {
  return (
    <img className={clsx("h-10", className)} src="/images/logo.png" />
  );
}

export default Logo;