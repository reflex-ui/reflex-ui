import {
  InteractivityStateTheme,
  OptionalInteractivityStateTheme,
} from '../../../theming/InteractivityStateTheme';
import {
  ButtonSubComponents,
  OptionalButtonSubComponents,
} from './ButtonSubComponents';
import {
  ButtonSubComponentsTheme,
  OptionalButtonSubComponentsTheme,
} from './ButtonSubComponentsTheme';

export interface ButtonVariantTheme {
  readonly allSizes: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly large: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly regular: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly small: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly subComponents: ButtonSubComponents;
  readonly xlarge: InteractivityStateTheme<ButtonSubComponentsTheme>;
  readonly xsmall: InteractivityStateTheme<ButtonSubComponentsTheme>;
}

export interface OptionalButtonVariantTheme {
  readonly allSizes?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly large?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly regular?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly small?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly subComponents?: OptionalButtonSubComponents;
  readonly xlarge?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
  readonly xsmall?: OptionalInteractivityStateTheme<
    OptionalButtonSubComponentsTheme
  >;
}