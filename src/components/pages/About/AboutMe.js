import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import Template from '../../template-items/Template';
import SparklingCursor from '../../SparklingCursor';

import headshot1 from '../../../images/NgocHeadshot.jpg';

const AboutMe = () => {
  const words = ['a Software Dev', 'a Designer', 'an Artist', 'a Learner', 'a Problem Solver'];
  const [currentWord, setCurrentWord] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const currentIndexRef = useRef(0);
  const currentWordIndexRef = useRef(0);

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
          currentWordIndexRef.current++; // Move this logic here
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
      <section className="introduction">
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
        <img id="headshot1" src={headshot1} className="rounded-image" alt="base"/>
        <div className="bio-info center">
        <h1 className="">NGOC TRAN • Stanford '26 • (she/her)</h1>
        <p className="lato">I am a first-generation Vietnamese-American college student majoring in Computer Science.<br></br><br></br>Particularly, I am interested in game design, web development, and bridging interdisciplinary fields to create cool things.<br></br><br></br>At Stanford, I am involved in the Vietnamese American Association (SVSA) as the Public Relations Co-chair, Women in Design (SWID), the Storyboarding Club, Stanford iGEM, and the Game Development Club.</p></div>
      </section>
    </Template>
  );
};


export default AboutMe;
