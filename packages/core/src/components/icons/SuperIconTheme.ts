import { ViewProps } from 'react-native';

import { OptionalPrimitiveTheme, PrimitiveTheme } from '../PrimitiveTheme';
import {
  OptionalSizedSubTheme,
  OptionalSubTheme,
  SizedSubTheme,
  SubTheme,
} from '../subcomponents';
import { OptionalViewTheme, ViewTheme } from '../views';
import { SuperIconProps } from './SuperIconProps';
import { TextIconProps } from './TextIconProps';

export interface SuperIconTheme {
  readonly container: SubTheme<SuperIconProps, ViewProps> &
    SizedSubTheme<ViewTheme<SuperIconProps>>;
  readonly icon: SizedSubTheme<PrimitiveTheme<SuperIconProps, TextIconProps>>;
}

export interface OptionalSuperIconTheme {
  readonly container?: OptionalSubTheme<SuperIconProps, ViewProps> &
    OptionalSizedSubTheme<OptionalViewTheme<SuperIconProps>>;
  readonly icon?: OptionalSizedSubTheme<
    OptionalPrimitiveTheme<SuperIconProps, TextIconProps>
  >;
}
