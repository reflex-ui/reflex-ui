import { TextProps } from 'react-native';
import { OptionalPrimitiveTheme, PrimitiveTheme } from '../../../theming';

export type TextTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  TextProps
>;

export type OptionalTextTheme<ComponentProps> = OptionalPrimitiveTheme<
  ComponentProps,
  TextProps
>;
