import React from "react";
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="top-spacer footer">
                <h1 className="footer-title center">Let's Connect!</h1>
                <p className="lato center">email: nhtran@stanford.edu</p>
                <ul id="footer-links" className="nav flex-row">
                    <li className="nav-item-icon">
                        <a className="nav-link active" href="mailto:nhtran@stanford.edu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li className="nav-item-icon">
                        <a className="nav-link active" href="https://www.linkedin.com/in/ngoc-tran-4882b1245/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li className="nav-item-icon">
                        <a className="nav-link active" href="https://github.com/ngochtran" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
