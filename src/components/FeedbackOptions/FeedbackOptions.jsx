import React from 'react';
import {
  FeedBackOptions,
  Btn,
  Title,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
}) => {
  return (
    <div>
      <Title>Please leave feedback</Title>
      <FeedBackOptions>
        <Btn onClick={goodFeedback} name="good">
          Good
        </Btn>
        <Btn onClick={neutralFeedback} name="neutral">
          Neutral
        </Btn>
        <Btn onClick={badFeedback} name="bad">
          Bad
        </Btn>
      </FeedBackOptions>
    </div>
  );
};
