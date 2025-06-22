import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PythonLessonScreen from './screens/pythonlessonscreen.tsx';
import './index.css';
import Lesson1Screen from './screens/lesson1/lesson1screen.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pythonlessonscreen" element={<PythonLessonScreen />} />
        <Route path="/lesson1" element={<Lesson1Screen />} />      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
