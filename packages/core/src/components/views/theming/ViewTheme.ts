import { ViewProps } from 'react-native';
import { PrimitiveTheme } from '../../../theming';

export type ViewTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  ViewProps
>;

export type OptionalViewTheme<ComponentProps> = Partial<
  ViewTheme<ComponentProps>
>;
