import { ReactNode } from 'react';
type HeaderProps = {
  children: ReactNode;
};
const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <div className="flex items-center space-x-4">{children}</div>
    </header>
  );
};

export default Header;
