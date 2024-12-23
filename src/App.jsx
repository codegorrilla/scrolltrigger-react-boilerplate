import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin('ScrollTrigger');

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;

    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 180,
        duration: 3,
        scrollTrigger: {
          trigger: el,
          toggleActions: 'restart none none none',
        },
      }
    );
  }, []);
  return (
    <>
      <div className='helper'></div>
      <div className='app'>
        <a
          href='https://vite.dev'
          target='_blank'
        >
          <img
            src={viteLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
            ref={imgRef}
          />
        </a>
      </div>
    </>
  );
}

export default App;
