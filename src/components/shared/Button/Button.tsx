import classNames from 'classnames/bind';
import React from 'react';
import s from './Button.module.scss';

interface Props {
  title: string;
  type: 'success' | 'danger';
  htmlType?: 'submit' | 'reset';
  disabled?: boolean;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  title,
  type,
  htmlType,
  width,
  height,
  ...props
}) => {
  const cx = classNames.bind(s);
  const styles = { width, height };

  return (
    <button
      {...props}
      className={cx(['button', type])}
      style={styles}
      type={htmlType || 'button'}
    >
      {title}
    </button>
  );
};
