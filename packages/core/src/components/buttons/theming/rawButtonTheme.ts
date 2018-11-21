import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

// tslint:disable-next-line:max-line-length
import { getRawSizedInteractiveTheme } from '../../../theming/getRawSizedInteractiveTheme';
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

export const rawButtonVariantTheme: ButtonVariantTheme = {
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.CONTAINER]: getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  [ButtonSubName.ICON]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.ICON_CONTAINER]: getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.LEADING_ICON]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.LEADING_ICON_CONTAINER]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  subComponents: rawButtonSubComponents,
  [ButtonSubName.TEXT]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TOUCHABLE]: getRawSizedInteractiveTheme<ButtonProps, TouchableWithoutFeedbackProps>(),
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TRAILING_ICON]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  // prettier-ignore
  // tslint:disable-next-line
  [ButtonSubName.TRAILING_ICON_CONTAINER]: getRawSizedInteractiveTheme<ButtonProps, TextProps>()
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
