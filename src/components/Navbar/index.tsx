import React from 'react';
import {TopNav} from './TopNav';
import {MiddleNav} from './MiddleNav';
import {Nav} from './Nav';

const Navbar: React.FC = () => {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <Nav />
    </div>
  );
};

export {Navbar};
