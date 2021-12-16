import React from 'react';
import s from './Title.module.scss';

interface Props {
  fontSize?: string;
  children: React.ReactText;
}

export const Title: React.FC<Props> = ({ fontSize, children }) => {
  return (
    <h2 className={s.title} style={{ fontSize }}>
      {children}
    </h2>
  );
};
