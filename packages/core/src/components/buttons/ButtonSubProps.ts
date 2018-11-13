import { TextProps, ViewProps } from 'react-native';
import { ButtonSubName } from './ButtonSubName';

export interface ButtonSubProps {
  readonly [ButtonSubName.CONTAINER]?: ViewProps;
  readonly [ButtonSubName.ICON]?: TextProps;
  readonly [ButtonSubName.ICON_CONTAINER]?: ViewProps;
  readonly [ButtonSubName.LEADING_ICON]?: TextProps;
  readonly [ButtonSubName.LEADING_ICON_CONTAINER]?: ViewProps;
  readonly [ButtonSubName.TEXT]?: TextProps;
  readonly [ButtonSubName.TRAILING_ICON]?: TextProps;
  readonly [ButtonSubName.TRAILING_ICON_CONTAINER]?: ViewProps;
}
