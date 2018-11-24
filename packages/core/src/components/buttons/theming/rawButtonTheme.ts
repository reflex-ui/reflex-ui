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
import { ButtonSubName } from '../ButtonSubName';
import { ButtonTheme, ButtonVariantsTheme } from './';

export const rawButtonVariantTheme: ButtonTheme = {
  [ButtonSubName.CONTAINER]: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  [ButtonSubName.ICON]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  [ButtonSubName.ICON_CONTAINER]: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  [ButtonSubName.LEADING_ICON]: getRawSizedInteractiveTheme<
    ButtonProps,
    TextProps
    // tslint:disable-next-line:ter-func-call-spacing
  >(),
  [ButtonSubName.LEADING_ICON_CONTAINER]: {
    component: DefaultViewSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, ViewProps>(),
  },
  [ButtonSubName.TEXT]: {
    component: DefaultTextSubcomponent,
    ...getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  },
  // prettier-ignore
  [ButtonSubName.TOUCHABLE]: {
    component: DefaultTouchableSubcomponent,
    // tslint:disable-next-line:max-line-length
    ...getRawSizedInteractiveTheme<ButtonProps, TouchableWithoutFeedbackProps>(),
  },
  // prettier-ignore
  // tslint:disable-next-line:max-line-length
  [ButtonSubName.TRAILING_ICON]: getRawSizedInteractiveTheme<ButtonProps, TextProps>(),
  [ButtonSubName.TRAILING_ICON_CONTAINER]: {
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
