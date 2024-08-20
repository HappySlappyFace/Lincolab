import "../styles/components/Footer.css";
import Lincolab from "./Lincolab";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* for the footer have 4 parts, 1st one will have the logo and icons to social media and email and location, 2nd about us, 3rd solutions and last account  */}
        <div className="row">
          <div className="col-md-4 text-start gap-2">
            <Lincolab />
            <div className="socialMediaLogos">
              <a
                href="https://www.facebook.com/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <div className="contact-grid">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                <span className="contact-text">Tunis, Tunisia</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} size="2x" />
                <span className="contact-text">+216 20000000</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <span className="contact-text">contact@lincolab.tn</span>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-start">
            <h4>About us</h4>
            <p>
              <a href="#">Who are we?</a>
              <br />
              <a href="#">FAQ</a>
            </p>
          </div>
          <div className="col-md-2 text-start">
            <h4>Solutions</h4>
            <p>
              <a href="#">How does it work?</a>
              <br />
              <a href="#">Pricing</a>
              <br />
              <a href="#">Contact</a>
            </p>
          </div>
          <div className="col-md-2 text-start">
            <h4>Account</h4>
            <p>
              <a href="#">Sign in</a>
              <br />
              <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
