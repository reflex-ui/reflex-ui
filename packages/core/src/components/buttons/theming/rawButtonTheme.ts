import { InteractivityStateTheme } from '../../../theming';
import {
  ButtonSubComponents,
  ButtonSubComponentsTheme,
  ButtonTheme,
  ButtonVariantTheme,
  DefaultButtonContainer,
  DefaultButtonLeftIconContainer,
  DefaultButtonText,
  DefaultButtonTouchable,
} from './';

export const rawButtonSubComponentsTheme: ButtonSubComponentsTheme = {
  container: {
    getProps: () => ({}),
    props: {},
  },
  leftIcon: {
    getProps: () => ({}),
    props: {},
  },
  leftIconContainer: {
    getProps: () => ({}),
    props: {},
  },
  text: {
    getProps: () => ({}),
    props: {},
  },
};

export const rawButtonInteractivityStateTheme: InteractivityStateTheme<
  ButtonSubComponentsTheme
> = {
  allStates: rawButtonSubComponentsTheme,
  disabled: rawButtonSubComponentsTheme,
  enabled: rawButtonSubComponentsTheme,
  focused: rawButtonSubComponentsTheme,
  hovered: rawButtonSubComponentsTheme,
  pressed: rawButtonSubComponentsTheme,
};

export const rawButtonSubComponents: ButtonSubComponents = {
  Container: DefaultButtonContainer,
  LeftIconContainer: DefaultButtonLeftIconContainer,
  Text: DefaultButtonText,
  Touchable: DefaultButtonTouchable,
};

export const rawButtonVariantTheme: ButtonVariantTheme = {
  allSizes: rawButtonInteractivityStateTheme,
  large: rawButtonInteractivityStateTheme,
  regular: rawButtonInteractivityStateTheme,
  small: rawButtonInteractivityStateTheme,
  subComponents: rawButtonSubComponents,
  xlarge: rawButtonInteractivityStateTheme,
  xsmall: rawButtonInteractivityStateTheme,
};

export const rawButtonTheme: ButtonTheme = {
  allVariants: rawButtonVariantTheme,
  contained: rawButtonVariantTheme,
  containedRaised: rawButtonVariantTheme,
  default: rawButtonVariantTheme,
  outlined: rawButtonVariantTheme,
};
