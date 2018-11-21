import {
  OptionalPrimitiveTheme,
  OptionalSizedSubcomponentTheme,
  PrimitiveTheme,
  SizedSubcomponentTheme,
} from '../../../theming';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { IconSubName } from '../IconSubName';
import { IconWrapperProps } from '../IconWrapperProps';
import { TextIconProps } from '../TextIconProps';
import {
  IconSubComponents,
  OptionalIconSubComponents,
} from './IconSubComponents';

export interface IconTheme {
  readonly [IconSubName.CONTAINER]: SizedSubcomponentTheme<
    ViewTheme<IconWrapperProps>
  >;
  readonly [IconSubName.ICON]: SizedSubcomponentTheme<
    PrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subComponents: IconSubComponents;
}

export interface OptionalIconTheme {
  readonly [IconSubName.CONTAINER]?: OptionalSizedSubcomponentTheme<
    OptionalViewTheme<IconWrapperProps>
  >;
  readonly [IconSubName.ICON]?: OptionalSizedSubcomponentTheme<
    OptionalPrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subComponents?: OptionalIconSubComponents;
}
