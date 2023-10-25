import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import Template from '../../template-items/Template';
import SparklingCursor from '../../SparklingCursor';

import headshot1 from '../../../images/NgocHeadshot.jpg';
import beemo from '../../../images/Beemo.jpg';
import bioE from '../../../images/BioE.jpg';
import katsu from '../../../images/Katsu.png';

const AboutMe = () => {
  const words = ['a Software Dev', 'a Designer', 'an Artist', 'a Learner', 'a Problem Solver'];
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const currentIndexRef = useRef(0);
  const currentWordIndexRef = useRef(0);

  // Add state to manage the active tab
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Computer Science Courses', 'Major-Specific Courses', 'Other Courses']; 
  const contentSections = [
    <div>
      <h2>Computer Science Courses</h2>
      <ul>
        <li className="lato smaller-li">CS 106A: Programming Methodology</li>
        <li className="lato smaller-li">CS 106B: Programming Abstractions</li>
        <li className="lato smaller-li">CS 107: Computer Organization & Systems</li>
        <li className="lato smaller-li">CS 148: Introduction to Computer Graphics and Imaging</li>
      </ul>
    </div>,
    <div>
      <h2>Science & Mathematics</h2>
      <ul>
        <li className="lato smaller-li">MATH 19: Calculus</li>
        <li className="lato smaller-li">Physics 41: Mechanics</li>
        <li className="lato smaller-li">AP Physics C: Electricity and Magnetism </li>
      </ul>
    </div>,
    <div className="column-section">
      <div className="column">
      <h2>General Education</h2>
        <ul>
          <li className="lato smaller-li">COLLEGE 102: Citizenship in the 21st Century</li>
          <li className="lato smaller-li">COLLEGE 107: Preventing Human Extinction</li>
          <li className="lato smaller-li">PWR 1SC: Rhetoric of Public Art</li>
        </ul>
      </div>
      <div className="column">
        <h2>Other STEM Courses</h2>
        <ul>
          <li className="lato smaller-li">CHEM 31M: Chemical Principles - From Molecules to Solids</li>
          <li className="lato smaller-li">CHEM 10:  Exploring Research & Problem Solving Across the Sciences</li>
          <li className="lato smaller-li">BIOE 44: Fundamentals for Engineering Biology Lab</li>
          <li className="lato smaller-li">CHEMENG 12SC: An Exploration of Art Material</li>
        </ul>
      </div>
      <div className="column">
        <h2>Humanities & Arts</h2>
          <ul>
            <li className="lato smaller-li">ENGLISH190H: The Graphic Novel</li>
            <li className="lato smaller-li">ARTSTUDI 40SI: Introduction to Art in Entertainment</li>
            <li className="lato smaller-li">RELIGST 107: Buddhism in the Bay Area</li>
            <li className="lato smaller-li">UAR42: LSP First Year Seminar</li>
          </ul>
      </div>
    </div>,
  ];

  // Function to handle tab clicks
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    let interval;

    const typeAndDeleteWord = () => {
      const wordToAnimate = words[currentWordIndexRef.current];
      const currentIndex = currentIndexRef.current;

      if (isTyping) {
        setCurrentWord(wordToAnimate.substring(0, currentIndex) + "|");
        currentIndexRef.current = currentIndex + 1;

        if (currentIndex >= wordToAnimate.length) {
          setCurrentWord(wordToAnimate);
          setTimeout(() => {
            setIsTyping(false);
          }, 500);
        }
      } else {
        setCurrentWord(wordToAnimate.substring(0, currentIndex) + "|");
        currentIndexRef.current = currentIndex - 1;

        if (currentIndex <= 0) {
          currentWordIndexRef.current++;
          if (currentWordIndexRef.current >= words.length) {
            currentWordIndexRef.current = 0;
          }
          setIsTyping(true);
        }
      }
    };

    interval = setInterval(typeAndDeleteWord, 100);

    return () => {
      clearInterval(interval);
    };
  }, [words, isTyping]);

  return (
    <Template>
      <section className="white-section">
        <div className="intro-box-1">
          <h1 className="intro-header">
            Hello! I'm <span style={{ color: '#c7a3e3' }}>Ngoc</span>,
          </h1>
        </div>
        <div className="intro-box-2">
          <h1 className="intro-header-2 lato">{currentWord}</h1>
        </div>
        <SparklingCursor />
      </section>
      <section className="bio black-section">
        <img id="headshot1" src={headshot1} className="rounded-image" alt="headshot of Ngoc"/>
        <div className="bio-info center">
          <h1>NGOC TRAN • Stanford '26 • (she/her)</h1>
          <p className="lato">I am a first-generation Vietnamese-American college student majoring in Computer Science at Stanford University.<br></br><br></br>Particularly, I am interested in game design, web development, and bridging interdisciplinary fields to create cool things.<br></br><br></br>At Stanford, I am involved in the Vietnamese American Association (SVSA) as the Public Relations Co-chair, Women in Design (SWID), the Storyboarding Club, Stanford iGEM, and the Game Development Club.</p></div>
      </section>
      <section className="phone-long section">
        <h1 className="bigger-h1 top-spacer-sm center">College Courses</h1>
        <div className="courses">
          <div class="tab-box">
            {/* Render the tabs with an onClick handler */}
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-btn ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div class="content-box">
            {/* Render the content for the selected tab based on activeTab */}
            {contentSections.map((content, index) => (
              <div key={index} className={`content ${index === activeTab ? 'active' : ''}`}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="phone-long section black-background">
      <h1 className="bigger-h1 top-spacer-sm center white">Skills</h1>
        <div className="info-boxes">
          <article className="info-box"><h2><b>Programming</b></h2>
          <p className="lato">I am proficient in utilizing these skills to develop video games and websites.</p>
          <p className="lato"><b className="lato">Programming Languages:</b> C++, C#, C, Python, Java, JavaScript (React.js), HTML/CSS</p>
          <p className="lato"><b className="lato">Developer Tools: </b> Git (GitHub/GitLab), Linux/Unix Environments</p>
          <p className="lato"><b className="lato">Game Engines: </b>Unity</p>
          </article>
          <article className="info-box"><h2><b>2D Illustration</b></h2>
          <p className="lato">I've utilized these skills to contribute to many art initiatives, ranging from a graphic novel to video animations.</p>
          <p className="lato"><b className="lato">Software:</b> Adobe Illustrator, Adobe Animate, Adobe InDesign, Procreate, Clip Studio, Aseprite</p>
          </article>
          <article className="info-box"><h2><b>3D Modeling</b></h2>
          <p className="lato">While I have explored 3D modeling in my own time, I have formally learned how to utilize Blender and Inventor in previous courses.</p>
          <p className="lato"><b className="lato">Software: </b>Blender, Autodesk Inventor</p>
          </article>
          <article className="info-box"><h2><b>Design (UI/UX)</b></h2>
          <p className="lato">I am interested in deploying design to enhance user interactions and experiences in video games, apps, and websites.</p>
          <p className="lato"><b className="lato">Software:</b> Adobe Xd, Figma</p>
          </article>
        </div>
      </section>
      <section className="phone-long section">
        <h1 className="bigger-h1 top-spacer-sm center">Fun Facts About Me!</h1>
        <div className="section-container">
          <div className="sub-section">
              <img src={beemo} className="hobby-image" alt="Beemo graduation cap"/>
              <h2>Video Game Enjoyer</h2>
              <p className="lato">One of my favorite hobbies is playing video games! Growing up, some of my fondest memories are playing games with my siblings. Now, I aspire to make my own games.</p>
          </div>
          <div className="sub-section">
            <img src={bioE} className="hobby-image" alt="bioE painting"/>
            <h2>BioE Enthusiast</h2>
            <p className="lato">I love Bioengineering! Pictured is a painting featured at the BioE Department's 20th Anniversary. I made it out of chromoprotein based watercolor paint extracted from bacteria.</p>
          </div>
          <div className="sub-section">
            <img src={katsu} className="hobby-image" alt="chicken curry katsu"/>
            <h2>Part-time Foodie</h2>
            <p className="lato">Cooking and baking are some of my other hobbies. One of my favorite dishes to make is Chicken Katsu Curry! It's the perfect combintation of textures and flavors.</p>
          </div>
        </div>
    </section>
    </Template>
  );
};

export default AboutMe;
