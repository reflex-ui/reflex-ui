import { OptionalTextTheme, TextTheme } from '../../typography';
import { OptionalViewTheme, ViewTheme } from '../../views';
import { IconWrapperProps } from '../IconWrapperProps';

export interface IconSubComponentsTheme {
  readonly container: ViewTheme<IconWrapperProps>;
  readonly icon: TextTheme<IconWrapperProps>;
}

export interface OptionalIconSubComponentsTheme {
  readonly container?: OptionalViewTheme<IconWrapperProps>;
  readonly icon?: OptionalTextTheme<IconWrapperProps>;
}
