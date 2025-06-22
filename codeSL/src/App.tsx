import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ThemeToggle from './components/themeToggle';
import chamLogo from '/cham.svg';
import './App.css';

// Replace with your real screen
const PythonLessonScreen = () => (
  <div className="card">
    <h2>Python Lesson 1</h2>
    <p>Start coding in Python!</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="phone-frame">
        <Routes>
          <Route
            path="/"
            element={
              <div className="fade-in">
                <div className="cham-wrapper">
                  <a href="https://vite.dev" target="_blank" rel="noreferrer">
                    <img src={chamLogo} className="logo" alt="Logo" />
                  </a>
                  <div className="speech-bubble">Hey! I'm Cham!⚡</div>
                </div>


                <h1 className="welcome-heading">
                  Welcome to <span className="code-sl">codeSL</span>
                </h1>

                <div className="card">
                  <button
                    className="start-button"
                    onClick={() => navigate('/pythonlessonscreen')}
                  >
                    Start Here!
                  </button>
                  <p>Code as a Second Language!</p>
                </div>
              </div>
            }
          />
          <Route path="/pythonlessonscreen" element={<PythonLessonScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
