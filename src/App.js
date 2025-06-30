import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [isDeciding, setIsDeciding] = useState(false);

  const handleChoice = (choice) => {
    setIsDeciding(true);
    setTimeout(() => {
      setResult(choice);
      setIsDeciding(false);
    }, 500); // Retraso para la animación
  };

  const reset = () => {
    setResult(null);
  };

  return (
    <div className={`app ${result ? 'result-active' : ''}`}>
      {isDeciding ? (
        <div className="decision-animation">
          <div className="pulse-effect"></div>
        </div>
      ) : result ? (
        <div className={`result ${result}`}>
          <h1 className="result-text">{result.toUpperCase()}!</h1>
          <div className="emoji">{result === 'smash' ? '🔥' : '❌'}</div>
          <button onClick={reset} className="reset-btn">
            ← VOLVER
          </button>
        </div>
      ) : (
        <div className="game">
          <h1 className="title">SMASH <span>or</span> PASS</h1>
          <div className="buttons">
            <button 
              className="pass-btn"
              onClick={() => handleChoice('pass')}
              onMouseEnter={(e) => e.target.textContent = 'NOPE 👎'}
              onMouseLeave={(e) => e.target.textContent = 'PASS'}
            >
              PASS
            </button>
            <button 
              className="smash-btn"
              onClick={() => handleChoice('smash')}
              onMouseEnter={(e) => e.target.textContent = 'YES! 🔥'}
              onMouseLeave={(e) => e.target.textContent = 'SMASH'}
            >
              SMASH
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;