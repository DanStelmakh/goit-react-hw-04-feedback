import { useState } from 'react';
import React from 'react';
import { Section } from 'components/Section/Section';

export const App = () => {
  const [goodMark, setGoodMark] = useState(0);
  const [neutralMark, setNeutralMark] = useState(0);
  const [badMark, setBadMark] = useState(0);

  const countGoodFeedback = () => {
    setGoodMark(goodMark + 1);
  };
  const countBadFeedback = () => {
    setBadMark(badMark + 1);
  };
  const countNeutralFeedback = () => {
    setNeutralMark(neutralMark + 1);
  };
  const countTotalFeedback = ({ goodMark, neutralMark, badMark }) => {
    return goodMark + neutralMark + badMark;
  };
  const countPositiveFeedbackPercentage = ({
    goodMark,
    neutralMark,
    badMark,
  }) => {
    return Math.round(
      (goodMark * 100) / countTotalFeedback({ goodMark, neutralMark, badMark })
    );
  };
  return (
    <Section
      good={countGoodFeedback}
      neutral={countNeutralFeedback}
      bad={countBadFeedback}
      incrementGood={goodMark}
      incrementNeutral={neutralMark}
      incrementBad={badMark}
      total={countTotalFeedback({ goodMark, neutralMark, badMark })}
      percent={
        countPositiveFeedbackPercentage({ goodMark, neutralMark, badMark }) || 0
      }
    ></Section>
  );
};
