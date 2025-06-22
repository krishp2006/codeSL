import React from 'react';

type Props = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
};

const ThemeToggle: React.FC<Props> = ({ darkMode, setDarkMode }) => {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
                position: 'fixed',
                top: 10,
                right: 10,
                padding: '6px 12px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                zIndex: 9999,
                background: darkMode ? '#222' : '#eee',
                color: darkMode ? '#eee' : '#222',
                boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
            aria-label="Toggle dark mode"
        >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ThemeToggle;
