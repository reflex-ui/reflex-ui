export interface InteractiveSubTheme<T> {
  readonly allStates: T;
  readonly disabled: T;
  readonly enabled: T;
  readonly focused: T;
  readonly hovered: T;
  readonly pressed: T;
}

export interface OptionalInteractiveSubTheme<T> {
  readonly allStates?: T;
  readonly disabled?: T;
  readonly enabled?: T;
  readonly focused?: T;
  readonly hovered?: T;
  readonly pressed?: T;
}
