import { ReactNode } from 'react';
type HeaderProps = {
  children: ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between space-x-4 p-6">
      <div className="flex items-center space-x-4">{children}</div>
    </header>
  );
};

export default Header;
