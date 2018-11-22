import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

// tslint:disable-next-line:max-line-length
import { getRawSizedInteractiveTheme } from '../../../theming/getRawSizedInteractiveTheme';
// tslint:disable-next-line:max-line-length
import { DefaultTouchableSubcomponent } from '../../touchable/DefaultTouchableSubcomponent';
// tslint:disable-next-line:max-line-length
import { DefaultTextSubcomponent } from '../../typography/DefaultTextSubcomponent';
import { DefaultViewSubcomponent } from '../../views/DefaultViewSubcomponent';
import { ButtonProps } from '../ButtonProps';
import { ButtonSubComponents } from '../ButtonSubComponents';
import { ButtonSubName } from '../ButtonSubName';
import { ButtonTheme, ButtonVariantTheme } from './';

export const rawButtonSubComponents: ButtonSubComponents = {
  container: DefaultViewSubcomponent,
  iconContainer: DefaultViewSubcomponent,
  leadingIconContainer: DefaultViewSubcomponent,
  text: DefaultTextSubcomponent,
  touchable: DefaultTouchableSubcomponent,
  trailingIconContainer: DefaultViewSubcomponent,
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
