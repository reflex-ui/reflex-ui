export interface SizedSubcomponentTheme<T> {
  readonly allSizes: T;
  readonly large: T;
  readonly medium: T;
  readonly none: T;
  readonly small: T;
  readonly xlarge: T;
  readonly xsmall: T;
}

export type OptionalSizedSubcomponentTheme<T> = Partial<
  SizedSubcomponentTheme<T>
>;
