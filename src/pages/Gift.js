import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allStepsCompleted } from '../utils/progress';

export default function Gift() {
  const navigate = useNavigate();

  if (!allStepsCompleted()) navigate('/');

  return (
    <div className="center">
      <h1>🎁 Happy Birthday! 🎁</h1>
      <p>You solved all the puzzles! Here's your surprise:</p>

      {/* Replace the src below with your real video download link */}
      <a
        href="https://drive.google.com/file/d/13tPYgN8ld4qHq87kPRn9d_qTNw0sigMg/view?usp=sharing"
        download
        className="download-link"
      >
        🎬 Download Your Gift Video
      </a>

      {/* Optional: embedded video */}
      {/* <video controls width="500">
        <source src="https://example.com/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
