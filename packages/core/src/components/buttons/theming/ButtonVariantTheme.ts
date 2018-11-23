import {
  InteractiveSubTheme,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  SizedSubTheme,
} from '../../../theming';
import { TouchableTheme } from '../../touchable';
import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { ButtonProps } from '../ButtonProps';
import {
  ButtonSubcomponents,
  OptionalButtonSubcomponents,
} from '../ButtonSubcomponents';
import { ButtonSubName } from '../ButtonSubName';

export interface ButtonVariantTheme {
  readonly [ButtonSubName.CONTAINER]: SizedSubTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]: SizedSubTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]: SizedSubTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
  readonly subcomponents: ButtonSubcomponents;
  readonly [ButtonSubName.TEXT]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]: SizedSubTheme<
    InteractiveSubTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]: SizedSubTheme<
    InteractiveSubTheme<TextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]: SizedSubTheme<
    InteractiveSubTheme<ViewTheme<ButtonProps>>
  >;
}

export interface OptionalButtonVariantTheme {
  readonly [ButtonSubName.CONTAINER]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.ICON_CONTAINER]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.LEADING_ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
  readonly subcomponents?: OptionalButtonSubcomponents;
  readonly [ButtonSubName.TEXT]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TOUCHABLE]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<TouchableTheme<ButtonProps>>
  >;
  readonly [ButtonSubName.TRAILING_ICON]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
  >;
  // tslint:disable-next-line:max-line-length
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: OptionalSizedSubTheme<
    OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
  >;
}
