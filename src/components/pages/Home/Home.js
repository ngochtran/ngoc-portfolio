import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import base1 from '../../../images/base1.png';
import base2 from '../../../images/base2.png';
import base3 from '../../../images/base3.png';
import base4 from '../../../images/base4.png';
import base5 from '../../../images/base5.png';
import base6 from '../../../images/base6.png';

import board from '../../../images/board-hover.png';
import files from '../../../images/files-hover.png';
import painting from '../../../images/painting-hover.png';
import shelf from '../../../images/shelf-hover.png';
import tv from '../../../images/tv-hover.png';
import hover from '../../../images/hover-empty.png';

function App() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const num = 6;
  const delay = 200; // Adjust this delay for a slower animation
  const images = [base1, base2, base3, base4, base5, base6];

  useEffect(() => {
    let animationIntervalId;

    const animate = () => {
      setCurrentFrame((prevFrame) => (prevFrame >= num - 1 ? 0 : prevFrame + 1));
    };

    animationIntervalId = setInterval(animate, delay);

    return () => {
      clearInterval(animationIntervalId);
    };
  }, []);

  const showImage = (uri) => {
    const hoverImage = document.getElementById('hover');
    if (hoverImage) {
      hoverImage.src = uri;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
        <div className="room">
            <img id="base" src={images[currentFrame]} className="img-base" alt="base" />
            <img id="hover" src={hover} className="img-hover" alt="hover" />
            <div className="reset-button-link" onMouseOver={() => showImage(hover)}>
              <button className="reset-button">
                <b>outside box</b>
              </button>
            </div>
            <a className="shelf-button-link" href="#" onMouseOver={() => showImage(shelf)}>
              <button className="shelf-button">
                <b>shelf</b>
              </button>
            </a>
            <Link to="/art-portfolio" className="painting-button-link" onMouseOver={() => showImage(painting)}>
              <button className="painting-button">
                <b>pl</b>
              </button>
            </Link>
            <Link to="/projects" className="files-button-link" onMouseOver={() => showImage(files)}>
              <button className="files-button">
                <b>files</b>
              </button>
            </Link>
            <Link to="/blog" className="tv-button-link" onMouseOver={() => showImage(tv)}>
              <button className="tv-button">
                <b>tv h</b>
              </button>
            </Link>
            <Link to="/about-me" className="board-button-link" onMouseOver={() => showImage(board)}>
              <button className="board-button">
                <b>bol</b>
              </button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="home-text">
              <div className="col">
                <div className="name">
                  <h1>Ngoc Tran</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link to="/about-me" className="nav-link active" href="about.html">
                        about me
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/projects" className="nav-link active" href="projects.html">
                        projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link active" href="blog.html">
                        blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/art-portfolio" className="nav-link active" href="art.html">
                        art portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        resume
                      </a>
                    </li>
                    <li className="nav-item-icon">
                      <ul className="nav flex-row">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;