import { useState } from 'react';
export const useCounterFeedback = defaultValue => {
  const [mark, setMark] = useState(defaultValue);
  const countFeedback = () => {
    setMark(state => state + 1);
  };
  return [mark, countFeedback];
};
