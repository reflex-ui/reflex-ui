import {
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';

// tslint:disable-next-line:max-line-length
import { getRawSizedInteractiveTheme } from '../../theming/getRawSizedInteractiveTheme';
// tslint:disable-next-line:max-line-length
import { DefaultTouchableSubcomponent } from '../../touchable/DefaultTouchableSubcomponent';
// tslint:disable-next-line:max-line-length
import { DefaultTextSubcomponent } from '../../typography/DefaultTextSubcomponent';
import { DefaultViewSubcomponent } from '../../views/DefaultViewSubcomponent';
import { ButtonProps } from '../ButtonProps';
import { ButtonTheme, ButtonVariantsTheme } from './';

export const rawButtonVariantTheme: ButtonTheme = {
  container: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  icon: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  iconContainer: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  leadingIcon: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  leadingIconContainer: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  text: {
    component: DefaultTextSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  },
  // prettier-ignore
  touchable: {
    component: DefaultTouchableSubcomponent,
    // tslint:disable-next-line:max-line-length
    ...getRawSizedInteractiveTheme<ButtonProps, TouchableWithoutFeedbackProps>(),
  },
  trailingIcon: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  trailingIconContainer: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
};

export const rawButtonTheme: ButtonVariantsTheme = {
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
