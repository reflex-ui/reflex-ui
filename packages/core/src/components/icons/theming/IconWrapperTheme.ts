import {
  OptionalPrimitiveTheme,
  OptionalSizedSubTheme,
  PrimitiveTheme,
  SizedSubTheme,
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
  readonly [IconWrapperSubName.CONTAINER]: SizedSubTheme<
    ViewTheme<IconWrapperProps>
  >;
  readonly [IconWrapperSubName.ICON]: SizedSubTheme<
    PrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subcomponents: IconWrapperSubcomponents;
}

export interface OptionalIconWrapperTheme {
  readonly [IconWrapperSubName.CONTAINER]?: OptionalSizedSubTheme<
    OptionalViewTheme<IconWrapperProps>
  >;
  readonly [IconWrapperSubName.ICON]?: OptionalSizedSubTheme<
    OptionalPrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
  readonly subcomponents?: OptionalIconWrapperSubcomponents;
}
