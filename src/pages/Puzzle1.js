import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setProgress } from '../utils/progress';

export default function Puzzle1() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const isAnswerCorrect = () => {
    return answer.toLowerCase().trim() === 'tea';
  };

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
    setError('');
  };

 const handleSubmit = () => {
  if (isAnswerCorrect()) {
    setProgress(1);
    navigate('/puzzle2');
  } else {
    const funnyErrors = [
      "Hmm, not quite. Try again, you’ve got this! ✨",
      "Almost there, I believe in you! 🌟",
      "That’s a good guess, but not the one I had in mind 🫣",
      "Think of something cozy and brown ☕",
      "Give it one more try — I know you know it 💖",
    ];
    const randomError = funnyErrors[Math.floor(Math.random() * funnyErrors.length)];
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
      <h2>Puzzle 1</h2>
      <p>What will you drink the most? (Hint: It is brown in color)</p>
      <p>Answer wrong or empty ga submit cheyakudadhu akka..</p>
      <input
        value={answer}
        onChange={handleInputChange}
        placeholder="Type your answer..."
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
