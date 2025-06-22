import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pythonlessonscreen.css'; // Create this CSS file next

const lessons = [
    { title: 'Lesson 1: Variables', unlocked: true },
    { title: 'Lesson 2: Data Types', unlocked: false },
    { title: 'Lesson 3: Conditionals', unlocked: false },
    { title: 'Lesson 4: Loops', unlocked: false },
    { title: 'Lesson 5: Functions', unlocked: false },
];

const PythonLessonScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="phone-frame lesson-screen">
            <h2 className="lesson-title">Python Lessons</h2>
            <ul className="lesson-list">
                {lessons.map((lesson, index) => (
                    <li
                        key={index}
                        className={`lesson-card ${lesson.unlocked ? '' : 'locked'}`}
                        onClick={() => {
                            if (lesson.unlocked) navigate(`/lesson${index + 1}`);
                        }}
                    >
                        <span>{lesson.title}</span>
                        {!lesson.unlocked && <span className="lock-icon">🔒</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PythonLessonScreen;
