export interface SubTheme<T> {
  readonly component: T;
}

export type OptionalSubTheme<T> = Partial<SubTheme<T>>;
