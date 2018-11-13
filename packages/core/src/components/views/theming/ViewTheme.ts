import { ViewProps } from 'react-native';
import { OptionalPrimitiveTheme, PrimitiveTheme } from '../../../theming';

export type ViewTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  ViewProps
>;

export type OptionalViewTheme<ComponentProps> = OptionalPrimitiveTheme<
  ComponentProps,
  ViewProps
>;
