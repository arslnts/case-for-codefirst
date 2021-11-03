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
                <a className="footer__navigation-link">Games</a>
              </li>
              <li>
                <a className="footer__navigation-link">Membership</a>
              </li>
              <li>
                <a className="footer__navigation-link">Download</a>
              </li>
            </ul>
            <ul className="footer__navigation-list">
              <li>
                <a className="footer__navigation-link">Contact us</a>
              </li>
              <li>
                <a className="footer__navigation-link">Blog</a>
              </li>
            </ul>
            <ul className="footer__navigation-list">
              <li>
                <a className="footer__navigation-link">FAQs</a>
              </li>
              <li>
                <a className="footer__navigation-link">Service Status</a>
              </li>
            </ul>
          </nav>

          <div className="footer__top-container">
            <p>Follow Us!</p>
            <div className="footer__social-media">
              <a>
                <FaFacebookF />
              </a>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer__top-container">
            <p>Site Language</p>
            <ul className="footer__social-media">
              <li>
                <a>Games</a>
              </li>
              <li>
                <a>Membership</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-container">
            <nav className="footer__bottom-nav">
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
              <a>Cookies</a>
            </nav>
            <p>Tüm hakları saklıdır</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
