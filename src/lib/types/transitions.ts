export type TransitionState = "entered" | "exited" | "entering" | "exiting" | "unmounted";

export type Transition<T> = Partial<Record<TransitionState, T>> & Pick<Record<TransitionState, T>, "entered" | "exited">;