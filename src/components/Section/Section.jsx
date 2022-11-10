import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = ({
  good,
  neutral,
  bad,
  incrementGood,
  incrementNeutral,
  incrementBad,
  total,
  percent,
}) => {
  return (
    <section>
      <FeedbackOptions
        goodFeedback={good}
        neutralFeedback={neutral}
        badFeedback={bad}
      ></FeedbackOptions>
      <Statistics
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
        total={total}
        percent={percent}
      ></Statistics>
    </section>
  );
};
