import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProgress, isStepCompleted } from '../utils/progress';

export default function Puzzle2() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  if (!isStepCompleted(1)) navigate('/puzzle1');

  const isAnswerCorrect = () => {
    return answer.toLowerCase().trim() === 'rishitha';
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (isAnswerCorrect()) {
      setProgress(2);
      navigate('/puzzle3');
    } else {
      const sweetErrors = [
        "You're really close, just think again! ✨",
        "That’s not it, but I still love your effort 💖",
        "Almost perfect. You’re doing great! 🌷",
        "It ends with 'tha'... you’ve got this 🫶",
        "Take your time, I know you’ll get it 💫",
      ];
      const randomError = sweetErrors[Math.floor(Math.random() * sweetErrors.length)];
      setError(randomError);
    }
  };

  const moveButton = () => {
    if (isAnswerCorrect()) return;

    const randomTop = Math.floor(Math.random() * 100 - 50);
    const randomLeft = Math.floor(Math.random() * 200 - 100);
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="center">
      <h2>Puzzle 2</h2>
      <p>What is the name that you don't want anyone to call you with? <br />(Hint: ends with "tha")</p>
      
      <input
        value={answer}
        onChange={handleInputChange}
        placeholder="Type the name here..."
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
