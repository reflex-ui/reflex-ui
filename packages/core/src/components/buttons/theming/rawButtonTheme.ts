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
  leadingIcon: {
    getProps: () => ({}),
    props: {},
  },
  leadingIconContainer: {
    getProps: () => ({}),
    props: {},
  },
  text: {
    getProps: () => ({}),
    props: {},
  },
  trailingIcon: {
    getProps: () => ({}),
    props: {},
  },
  trailingIconContainer: {
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
  LeadingIconContainer: DefaultButtonIconContainer,
  Text: DefaultButtonText,
  Touchable: DefaultButtonTouchable,
  TrailingIconContainer: DefaultButtonIconContainer,
  XFabIconContainer: DefaultButtonIconContainer,
};

export const rawButtonVariantTheme: ButtonVariantTheme = {
  allSizes: rawButtonInteractivityStateTheme,
  large: rawButtonInteractivityStateTheme,
  medium: rawButtonInteractivityStateTheme,
  none: rawButtonInteractivityStateTheme,
  small: rawButtonInteractivityStateTheme,
  subComponents: rawButtonSubComponents,
  xlarge: rawButtonInteractivityStateTheme,
  xsmall: rawButtonInteractivityStateTheme,
};

export const rawButtonTheme: ButtonTheme = {
  allVariants: rawButtonVariantTheme,
  contained: rawButtonVariantTheme,
  containedShaped: rawButtonVariantTheme,
  default: rawButtonVariantTheme,
  fab: rawButtonVariantTheme,
  highlighted: rawButtonVariantTheme,
  icon: rawButtonVariantTheme,
  outlined: rawButtonVariantTheme,
  xfab: rawButtonVariantTheme,
};
