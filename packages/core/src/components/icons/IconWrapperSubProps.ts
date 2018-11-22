import { TextProps, ViewProps } from 'react-native';
import { IconWrapperSubName } from './IconWrapperSubName';

export interface IconWrapperSubProps {
  readonly [IconWrapperSubName.CONTAINER]?: ViewProps;
  readonly [IconWrapperSubName.ICON]?: TextProps;
}
