import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ href, label }) => {
  return (
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00b5d8]" to={href}>
      {label}
    </Link>
  );
};

export default NavItem;
