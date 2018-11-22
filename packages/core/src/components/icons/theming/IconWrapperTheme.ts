import {
  OptionalPrimitiveTheme,
  OptionalSizedSubcomponentTheme,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../../theming';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { IconWrapperProps } from '../IconWrapperProps';
import {
  IconWrapperSubcomponents,
  OptionalIconWrapperSubcomponents,
} from '../IconWrapperSubcomponents';
import { IconWrapperSubName } from '../IconWrapperSubName';
import { TextIconProps } from '../TextIconProps';

export interface IconWrapperTheme {
  readonly [IconWrapperSubName.CONTAINER]: SizedSubcomponentTheme<
    ViewTheme<IconWrapperProps>
  >;
  readonly [IconWrapperSubName.ICON]: SizedSubcomponentTheme<
    PrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subComponents: IconWrapperSubcomponents;
}

export interface OptionalIconWrapperTheme {
  readonly [IconWrapperSubName.CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalViewTheme<IconWrapperProps>
  >;
  readonly [IconWrapperSubName.ICON]?: OptionalSizedSubcomponentTheme<
    OptionalPrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subComponents?: OptionalIconWrapperSubcomponents;
}
