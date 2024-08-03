import './navbar.css';

const links = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Bars',
    href: '#',
  },
  {
    name: 'Events',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Link 5',
    href: '#',
  },
];
const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <div className="navbar-image1">
            <img alt="image" src="/assets/logo.svg" className="navbar-logo" />
          </div>
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="thq-body-small thq-link"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="navbar-buttons">
              <button className="navbar-action1 thq-button-filled thq-button-animated">
                <span className="thq-body-small">Action 1</span>
              </button>
              <button className="navbar-action2 thq-button-outline thq-button-animated">
                <span className="thq-body-small">Action 2</span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt="image"
                  src="/assets/logo.svg"
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="thq-body-small thq-link"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="navbar-buttons1">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
};

export default Navbar;
