import { InteractivityStateTheme } from '../../../theming';
import {
  ButtonSubComponents,
  ButtonSubComponentsTheme,
  ButtonTheme,
  ButtonVariantTheme,
  DefaultButtonContainer,
  DefaultButtonIconContainer,
  DefaultButtonText,
  DefaultButtonTouchable,
} from './';

export const rawButtonSubComponentsTheme: ButtonSubComponentsTheme = {
  container: {
    getProps: () => ({}),
    props: {},
  },
  icon: {
    getProps: () => ({}),
    props: {},
  },
  iconContainer: {
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
  rightIcon: {
    getProps: () => ({}),
    props: {},
  },
  rightIconContainer: {
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
  IconContainer: DefaultButtonIconContainer,
  LeftIconContainer: DefaultButtonIconContainer,
  RightIconContainer: DefaultButtonIconContainer,
  Text: DefaultButtonText,
  Touchable: DefaultButtonTouchable,
  XFabIconContainer: DefaultButtonIconContainer,
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
  fab: rawButtonVariantTheme,
  icon: rawButtonVariantTheme,
  outlined: rawButtonVariantTheme,
  xfab: rawButtonVariantTheme,
};
