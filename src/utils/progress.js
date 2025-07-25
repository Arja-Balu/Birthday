export const setProgress = (step) => {
  localStorage.setItem(`puzzle${step}`, 'true');
};

export const isStepCompleted = (step) => {
  return localStorage.getItem(`puzzle${step}`) === 'true';
};

export const allStepsCompleted = () => {
  return isStepCompleted(1) && isStepCompleted(2) && isStepCompleted(3);
};
