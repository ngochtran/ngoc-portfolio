import React, { useEffect, useState, useRef } from 'react';
import './About.css';
import Template from '../../template-items/Template';
import SparklingCursor from '../../SparklingCursor';

import headshot1 from '../../../images/NgocHeadshot.png';

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
      </section>
      <SparklingCursor />
      <section className="bio">
        <img id="headshot1" src={headshot1} className="img-base" alt="base"/>
      </section>
    </Template>
  );
};


export default AboutMe;
