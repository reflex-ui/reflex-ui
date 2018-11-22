import {
  InteractivityStateTheme,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  SizedSubcomponentTheme,
} from '../../../theming';
import { TouchableTheme } from '../../touchable';
import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';
import {
  ButtonSubComponents,
  OptionalButtonSubComponents,
} from '../ButtonSubComponents';
import { ButtonSubName } from '../ButtonSubName';

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
    OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly subComponents?: OptionalButtonSubComponents;
  readonly [ButtonSubName.TEXT]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
  >;
}
