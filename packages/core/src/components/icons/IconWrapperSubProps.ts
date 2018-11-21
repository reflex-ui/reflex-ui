import { TextProps, ViewProps } from 'react-native';
import { IconSubName } from './IconSubName';

export interface IconWrapperSubProps {
  readonly [IconSubName.CONTAINER]?: ViewProps;
  readonly [IconSubName.ICON]?: TextProps;
}
