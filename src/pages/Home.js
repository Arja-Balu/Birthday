import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>Happy Birthday Akkaaaa..... 🎉</h1>
      <p>haha, answers cheppi gift tesko....</p>
      <button onClick={() => navigate('/puzzle1')}>Start the Hunt</button>
    </div>
  );
}
