export type TransitionState = "entered" | "exited" | "entering" | "exiting" | "unmounted";

export type Transition<T> = Partial<Record<TransitionState, T>> & Pick<Record<TransitionState, T>, "entered" | "exited">;

export const growHorizontal = ({ entered, exited, entering, exiting, unmounted }: Transition<number>) => ({
  entered: {
    width: entered,
  },
  entering: { 
    width: entering || entered,
  },
  exiting: { 
    width: exiting || exited,
  },
  exited: { 
    width: exited,
  },
  unmounted: { 
    width: unmounted || exited,
  },
});

export const slideRight = ({ elemWidth }: { elemWidth: number }) => ({
  entered: {
    transform: 'translateX(0vw)',
  },
  entering: { 
    transform: `translateX(-${elemWidth + 10}px)`,
  },
  exiting: { 
    transform: 'translateX(-100vw)',
  },
  exited: { 
    transform: 'translateX(-100vw)',
  },
  unmounted: { 
    transform: 'translateX(-100vw)',
  },
});