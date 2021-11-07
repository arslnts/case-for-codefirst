import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <nav className="footer__navigation">
            <ul className="footer__navigation-list">
              <li>
                <a href="/#" className="footer__navigation-link">
                  Games
                </a>
              </li>
              <li>
                <a href="/#" className="footer__navigation-link">
                  Membership
                </a>
              </li>
              <li>
                <a href="/#" className="footer__navigation-link">
                  Download
                </a>
              </li>
            </ul>
            <ul className="footer__navigation-list">
              <li>
                <a href="/#" className="footer__navigation-link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/#" className="footer__navigation-link">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="footer__navigation-list">
              <li>
                <a href="/#" className="footer__navigation-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/#" className="footer__navigation-link">
                  Service Status
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__top-container">
            <p>Follow Us!</p>
            <div className="footer__social-media">
              <a href="/#">
                <FaFacebookF />
              </a>
              <a href="/#">
                <FaTwitter />
              </a>
              <a href="/#">
                <FaInstagram />
              </a>
              <a href="/#">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer__top-container">
            <p>Site Language</p>
            <select className="footer__site-language">
              <option value="turkce">Türkce</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-container">
            <nav className="footer__bottom-nav">
              <a href="/#">Terms of Use</a>
              <a href="/#">Privacy Policy</a>
              <a href="/#">Cookies</a>
            </nav>
            <p>Tüm hakları saklıdır</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
