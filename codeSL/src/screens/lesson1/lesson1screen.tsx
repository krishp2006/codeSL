import React, { useState } from 'react';
import './lesson1Screen.css';

const Lesson1Screen = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep((prev) => prev + 1);

    return (
        <div className="phone-frame lesson1-container">
            {step === 0 && (
                <div className="cham-intro">
                    <p>
                        🦎 Hi, I’m Cham! Today we’ll learn about <strong>variables</strong> in Python.
                        A variable stores information like numbers or words. For example:
                    </p>
                    <pre>
                        name = "Cham"
                        age = 3
                    </pre>
                    <button className="start-button" onClick={nextStep}>Got it!</button>
                </div>
            )}

            {step === 1 && (
                <div className="multiple-choice">
                    <p>✅ Which line correctly assigns the number 5 to a variable?</p>
                    <ul>
                        <li onClick={nextStep}>x = 5</li>
                        <li>alert 5 = x</li>
                        <li>int x = 5</li>
                        <li>let x = 5</li>
                    </ul>
                </div>
            )}

            {step === 2 && (
                <div className="drag-and-drop">
                    <p>🔀 Match the code to what it does (Coming soon...)</p>
                    {/* Drag and drop UI can be added later */}
                    <button className="start-button" onClick={nextStep}>Next</button>
                </div>
            )}

            {step === 3 && (
                <div className="fill-in-blank">
                    <p>✏️ Fill in the blanks below:</p>
                    <pre>
                        <code>
                            <input className="blank-input" placeholder="..." /> = 5{"\n"}
                            print(<input className="blank-input" placeholder="..." />)
                        </code>
                    </pre>
                    <button className="start-button" onClick={() => alert('Check logic later')}>Check</button>
                </div>
            )}

            {step > 3 && (
                <div className="lesson-complete">
                    <p>🎉 Great job! You completed Lesson 1.</p>
                    <button className="start-button">Back to Lessons</button>
                </div>
            )}
        </div>
    );
};

export default Lesson1Screen;
