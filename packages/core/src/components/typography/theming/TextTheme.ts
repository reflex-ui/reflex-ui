import { TextProps } from 'react-native';
import { PrimitiveTheme } from '../../../theming';

export type TextTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  TextProps
>;

export type OptionalTextTheme<ComponentProps> = Partial<
  TextTheme<ComponentProps>
>;
