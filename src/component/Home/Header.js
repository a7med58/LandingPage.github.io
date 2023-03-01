import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="col-md-6">
          <h1>Welcome IN My Page</h1>
          <p>
            Hello My Name Ahmed Ragab Im Working Frontend Developer With ReactJS
            Framework
          </p>
          <i className="iconfonmar">
            <a href="https://github.com/a7med58">
              <FontAwesomeIcon size="3x" icon={faGithub} color="#a82d49" />
            </a>
          </i>
          <i className="iconfonmar">
            <a href="https://twitter.com/Mamo23549442">
              <FontAwesomeIcon size="3x" icon={faTwitter} color="#a82d49" />
            </a>
          </i>
          <i className="iconfonmar">
            <a href="https://www.facebook.com/theeagle58">
              <FontAwesomeIcon size="3x" icon={faFacebook} color="#a82d49" />
            </a>
          </i>
          <i className="iconfonmar">
            <a href="https://www.instagram.com/ahmed_ragab_58/">
              <FontAwesomeIcon size="3x" icon={faInstagram} color="#a82d49" />
            </a>
          </i>
          <i className="iconfonmar">
            <a href="https://www.linkedin.com/in/ahmedragab58/">
              <FontAwesomeIcon size="3x" icon={faLinkedinIn} color="#a82d49" />
            </a>
          </i>
        </div>
        <div className="col-md-6"></div>
      </div>
    </header>
  );
};

export default Header;
