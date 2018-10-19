export interface InteractivityStateTheme<T> {
  readonly allStates: T;
  readonly disabled: T;
  readonly enabled: T;
  readonly focused: T;
  readonly hovered: T;
  readonly pressed: T;
}

export interface OptionalInteractivityStateTheme<T> {
  readonly allStates?: T;
  readonly disabled?: T;
  readonly enabled?: T;
  readonly focused?: T;
  readonly hovered?: T;
  readonly pressed?: T;
}
