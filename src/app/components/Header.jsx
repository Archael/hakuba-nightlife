import { Children } from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-4 p-6">
      <div className="flex items-center space-x-4">{children}</div>
    </header>
  );
};

export default Header;
