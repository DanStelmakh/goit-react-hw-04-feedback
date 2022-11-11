import React from 'react';
import { Section } from 'components/Section/Section';
import { useCounterFeedback } from 'Hooks/CounterFeedback'; // кастомный хук для подсчета отзывов

export const App = () => {
  const [goodMark, setGoodMark] = useCounterFeedback(0);
  const [neutralMark, setNeutralMark] = useCounterFeedback(0);
  const [badMark, setBadMark] = useCounterFeedback(0);
  // *Рабочий вариант без кастомного хука
  //======================================
  //   const countGoodFeedback = () => {
  //     setGoodMark(state => state + 1);
  //   };

  //   const countBadFeedback = () => {
  //     setBadMark(state => state + 1);
  //   };

  //   const countNeutralFeedback = () => {
  //     setNeutralMark(state => state + 1);
  //   };
  //========================================
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
      good={setGoodMark}
      neutral={setNeutralMark}
      bad={setBadMark}
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
