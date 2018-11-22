import {
  InteractiveSubTheme,
  OptionalInteractiveSubTheme,
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
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]: SizedSubcomponentTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]: SizedSubcomponentTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly subComponents: ButtonSubComponents;
  readonly [ButtonSubName.TEXT]: SizedSubcomponentTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]: SizedSubcomponentTheme<
    InteractiveSubTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]: SizedSubcomponentTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: SizedSubcomponentTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
}

export interface OptionalButtonVariantTheme {
  readonly [ButtonSubName.CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly subComponents?: OptionalButtonSubComponents;
  readonly [ButtonSubName.TEXT]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
}
