import {
  IconSubComponents,
  OptionalIconSubComponents,
} from './IconSubComponents';
import {
  IconSubComponentsTheme,
  OptionalIconSubComponentsTheme,
} from './IconSubComponentsTheme';

export interface IconTheme {
  readonly allSizes: IconSubComponentsTheme;
  readonly large: IconSubComponentsTheme;
  readonly medium: IconSubComponentsTheme;
  readonly none: IconSubComponentsTheme;
  readonly small: IconSubComponentsTheme;
  readonly subComponents: IconSubComponents;
  readonly xlarge: IconSubComponentsTheme;
  readonly xsmall: IconSubComponentsTheme;
}

export interface OptionalIconTheme {
  readonly allSizes?: OptionalIconSubComponentsTheme;
  readonly large?: OptionalIconSubComponentsTheme;
  readonly medium?: OptionalIconSubComponentsTheme;
  readonly none?: OptionalIconSubComponentsTheme;
  readonly small?: OptionalIconSubComponentsTheme;
  readonly subComponents?: OptionalIconSubComponents;
  readonly xlarge?: OptionalIconSubComponentsTheme;
  readonly xsmall?: OptionalIconSubComponentsTheme;
}
