import React from 'react';
import { animated, useTransition } from 'react-spring';
import s from './Modal.module.scss';

interface Props {
  visible: boolean;
}

export const Modal: React.FC<Props> = ({ visible, children }) => {
  const transition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <>
      {transition(({ opacity }, item) =>
        item ? (
          <animated.div
            className={`${s.modal} ${visible ? s.visible : ''}`}
            style={{ opacity }}
          >
            <div className={s.content}>{children}</div>
          </animated.div>
        ) : null
      )}
    </>
  );
};
