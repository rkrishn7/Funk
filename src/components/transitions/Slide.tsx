import React from 'react';
import { Transition } from 'react-transition-group';
import { Transition as TransitionStyle } from '@src/lib/types';

const DEFAULT_ANIMATION_DURATION = 300;

const SLIDE_IN_STYLES: Record<Direction, TransitionStyle<React.CSSProperties>> = {
  up: {
    entered: {
      transform: 'translateY(0vh)',
    },
    entering: {
      transform: 'translateY(100vh)',
    },
    exited: {
      transform: 'translateY(100vh)',
    },
    exiting: {
      transform: 'translateY(100vh)',
    },
    unmounted: {
      transform: 'translateY(100vh)',
    }
  },
  down: {
    entered: {
      transform: 'translateY(0vh)',
    },
    entering: {
      transform: 'translateY(-110vh)',
    },
    exited: {
      transform: 'translateY(-110vh)',
    },
    exiting: {
      transform: 'translateY(-110vh)',
    },
    unmounted: {
      transform: 'translateY(-110vh)',
    },
  },
  left: {
    entered: {
      transform: 'translateX(0vw)',
    },
    entering: {
      transform: 'translateX(100vw)',
    },
    exited: {
      transform: 'translateX(100vw)',
    },
    exiting: {
      transform: 'translateX(100vw)',
    },
    unmounted: {
      transform: 'translateX(-100vw)',
    },
  },
  right: {
    entered: {
      transform: 'translateX(0vw)',
    },
    entering: {
      transform: 'translateX(-100vw)',
    },
    exited: {
      transform: 'translateX(-100vw)',
    },
    exiting: {
      transform: 'translateX(-100vw)',
    },
    unmounted: {
      transform: 'translateX(-100vw)',
    }
  },
};

const invertDirection = (direction: Direction) => {
  switch(direction) {
    case "right":
      return "left";
    case "left":
      return "right";
    case "down":
      return "up";
    case "up":
      return "down";
  }
}

type Direction = "left" | "right" | "up" | "down";

interface SlideProps {
  children: React.ReactNode;
  show: boolean;
  in: Direction;
  out: Direction;
  duration?: number;
};

export const Slide: React.FC<SlideProps> = ({
  duration = DEFAULT_ANIMATION_DURATION, 
  children,
  show,
  in: directionIn,
  out: directionOut,
}) => {
  directionOut = invertDirection(directionOut);

  const styles = {
    entered: SLIDE_IN_STYLES[directionIn].entered,
    entering: SLIDE_IN_STYLES[directionIn].entering,
    exiting: SLIDE_IN_STYLES[directionOut].exiting,
    exited: SLIDE_IN_STYLES[directionOut].exited,
    unmounted: SLIDE_IN_STYLES[directionOut].unmounted,
  };

  return (
    <Transition 
      in={show} 
      timeout={{
        enter: 0,
        exit: duration,
      }}
      appear
      unmountOnExit>
      {state => (
        React.Children.map(children, child => 
          React.cloneElement(child as React.ReactElement<any>, {
            style: {
              ...styles[state],
              ...{ 
                transition: `all ${duration}ms ease-in-out`,
              },
            }
          })
        )
      )}
    </Transition>
  );
}

