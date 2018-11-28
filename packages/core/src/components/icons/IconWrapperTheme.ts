import { ViewProps } from 'react-native';

import { OptionalPrimitiveTheme, PrimitiveTheme } from '../PrimitiveTheme';
import {
  OptionalSizedSubTheme,
  OptionalSubTheme,
  SizedSubTheme,
  SubTheme,
} from '../subcomponents';
import { OptionalViewTheme, ViewTheme } from '../views';
import { IconWrapperProps } from './IconWrapperProps';
import { TextIconProps } from './TextIconProps';

export interface IconWrapperTheme {
  readonly container: SubTheme<IconWrapperProps, ViewProps> &
    SizedSubTheme<ViewTheme<IconWrapperProps>>;
  readonly icon: SizedSubTheme<PrimitiveTheme<IconWrapperProps, TextIconProps>>;
}

export interface OptionalIconWrapperTheme {
  readonly container?: OptionalSubTheme<IconWrapperProps, ViewProps> &
    OptionalSizedSubTheme<OptionalViewTheme<IconWrapperProps>>;
  readonly icon?: OptionalSizedSubTheme<
    OptionalPrimitiveTheme<IconWrapperProps, TextIconProps>
  >;
}
