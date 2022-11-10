import React from 'react';
export const Notification = ({ message }) => {
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 8,
        padding: '12px 16px',
        borderRadius: 4,
        backgroundColor: 'gray',
        color: 'white',
        fontSize: '25px',
      }}
    >
      {message}
    </span>
  );
};
