import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProgress, isStepCompleted } from '../utils/progress';

export default function Puzzle3() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isStepCompleted(2)) {
      navigate('/puzzle2');
    }
  }, [navigate]);

  const isAnswerCorrect = () => {
    const cleaned = answer.toLowerCase().trim().replace(/^july\/0?/, 'july/');
    return cleaned === 'july/3';
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (isAnswerCorrect()) {
      setProgress(3);
      navigate('/gift');
    } else {
      const funnyErrors = [
        "Nope! That ain't it chief 😭",
        "Wrong again, you're on a roll! 🛼",
        "Try harder, birthday genius 🎂",
        "Even your dog knows that's not right 🐶",
        "Keep guessing... I'm enjoying this 😏"
      ];
      const randomError = funnyErrors[Math.floor(Math.random() * funnyErrors.length)];
      setError(randomError);
    }
  };

  const moveButton = () => {
    if (isAnswerCorrect()) return; // Do nothing if correct

    const randomTop = Math.floor(Math.random() * 100 - 50);
    const randomLeft = Math.floor(Math.random() * 200 - 100);
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="center">
      <h2>Puzzle 3</h2>
      <p>When is my birthday?? (Hint: format = month/date)</p>
      <input
        value={answer}
        onChange={handleInputChange}
        
      />

      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          top: buttonPosition.top,
          left: buttonPosition.left,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={moveButton}
        ref={buttonRef}
      >
        <button
          onClick={handleSubmit}
          disabled={!isAnswerCorrect()}
          style={{
            cursor: isAnswerCorrect() ? 'pointer' : 'not-allowed',
          }}
        >
          Submit
        </button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
