import React from 'react';
import {
  Statistic,
  Title,
  Item,
} from 'components/Statistics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({
  incrementGood,
  incrementNeutral,
  incrementBad,
  total,
  percent,
}) => {
  return incrementGood !== 0 || incrementNeutral !== 0 || incrementBad !== 0 ? (
    <div>
      <Title>Statistics</Title>
      <Statistic>
        <Item>Good: {incrementGood}</Item>
        <Item>Neutral: {incrementNeutral}</Item>
        <Item>Bad: {incrementBad}</Item>
        <Item>Total: {total}</Item>
        <Item>
          Positive feedback:
          {percent}%
        </Item>
      </Statistic>
    </div>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};
