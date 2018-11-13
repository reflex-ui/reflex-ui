import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

import {
  InteractivityStateTheme,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../../theming';
import { ButtonProps } from '../ButtonProps';
import { ButtonSubName } from '../ButtonSubName';
import {
  ButtonSubComponents,
  ButtonTheme,
  ButtonVariantTheme,
  DefaultButtonContainer,
  DefaultButtonIconContainer,
  DefaultButtonText,
  DefaultButtonTouchable,
} from './';

export const rawButtonSubComponents: ButtonSubComponents = {
  container: DefaultButtonContainer,
  iconContainer: DefaultButtonIconContainer,
  leadingIconContainer: DefaultButtonIconContainer,
  text: DefaultButtonText,
  touchable: DefaultButtonTouchable,
  trailingIconContainer: DefaultButtonIconContainer,
};

export const getInteractiveButtonTheme = <
  PrimitiveProps extends TextProps | ViewProps
>(): InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>> => ({
  allStates: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
  disabled: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
  enabled: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
  focused: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
  hovered: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
  pressed: {
    getProps: () => ({} as PrimitiveProps),
    props: {} as PrimitiveProps,
  },
});

export const getSizedButtonTheme = <
  PrimitiveProps extends TextProps | ViewProps
>(): SizedSubcomponentTheme<
  InteractivityStateTheme<PrimitiveTheme<ButtonProps, PrimitiveProps>>
> => ({
  allSizes: getInteractiveButtonTheme(),
  large: getInteractiveButtonTheme(),
  medium: getInteractiveButtonTheme(),
  none: getInteractiveButtonTheme(),
  small: getInteractiveButtonTheme(),
  xlarge: getInteractiveButtonTheme(),
  xsmall: getInteractiveButtonTheme(),
});

export const rawButtonVariantTheme: ButtonVariantTheme = {
  [ButtonSubName.CONTAINER]: getSizedButtonTheme<ViewProps>(),
  [ButtonSubName.ICON]: getSizedButtonTheme<TextProps>(),
  [ButtonSubName.ICON_CONTAINER]: getSizedButtonTheme<ViewProps>(),
  [ButtonSubName.LEADING_ICON]: getSizedButtonTheme<TextProps>(),
  [ButtonSubName.LEADING_ICON_CONTAINER]: getSizedButtonTheme<TextProps>(),
  subComponents: rawButtonSubComponents,
  [ButtonSubName.TEXT]: getSizedButtonTheme<TextProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TOUCHABLE]: getSizedButtonTheme<TouchableWithoutFeedbackProps>(),
  [ButtonSubName.TRAILING_ICON]: getSizedButtonTheme<TextProps>(),
  [ButtonSubName.TRAILING_ICON_CONTAINER]: getSizedButtonTheme<TextProps>(),
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
  outlinedShaped: rawButtonVariantTheme,
  xfab: rawButtonVariantTheme,
};
