import {
  InteractivityStateTheme,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  SizedSubcomponentTheme,
} from '../../../theming';
import { TouchableTheme } from '../../touchable';
import { TextTheme } from '../../typography';
import { ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';
import { ButtonSubName } from '../ButtonSubName';
import {
  ButtonSubComponents,
  OptionalButtonSubComponents,
} from './ButtonSubComponents';

export interface ButtonVariantTheme {
  readonly [ButtonSubName.CONTAINER]: SizedSubcomponentTheme<
    InteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]: SizedSubcomponentTheme<
    InteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]: SizedSubcomponentTheme<
    InteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly subComponents: ButtonSubComponents;
  readonly [ButtonSubName.TEXT]: SizedSubcomponentTheme<
    InteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]: SizedSubcomponentTheme<
    InteractivityStateTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]: SizedSubcomponentTheme<
    InteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
}

export interface OptionalButtonVariantTheme {
  readonly [ButtonSubName.CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
  readonly subComponents?: OptionalButtonSubComponents;
  readonly [ButtonSubName.TEXT]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<ViewTheme<ButtonProps>>
  >;
}
