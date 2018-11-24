import { TextProps, ViewProps } from 'react-native';

export interface ButtonSubProps {
  readonly container?: ViewProps;
  readonly icon?: TextProps;
  readonly iconContainer?: ViewProps;
  readonly leadingIcon?: TextProps;
  readonly leadingIconContainer?: ViewProps;
  readonly text?: TextProps;
  readonly trailingIcon?: TextProps;
  readonly trailingIconContainer?: ViewProps;
}
