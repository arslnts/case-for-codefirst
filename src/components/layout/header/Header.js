import "./Header.scss";
import logo from "../../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/#" className="header__logo">
          <img src={logo} alt="Logo" />
        </a>

        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="/#" className="navigation__link">
                Games
              </a>
            </li>
            <li className="navigation__item">
              <a href="/#" className="navigation__link">
                Membership
              </a>
            </li>
            <li className="navigation__item">
              <a href="/#" className="navigation__link">
                Download
              </a>
            </li>
            <li className="navigation__item">
              <a href="/#" className="navigation__link">
                Blog
              </a>
            </li>
            <li className="navigation__item">
              <a href="/#" className="navigation__link">
                Support
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__button">LET'S PLAY</button>
      </div>
    </header>
  );
};

export default Header;
