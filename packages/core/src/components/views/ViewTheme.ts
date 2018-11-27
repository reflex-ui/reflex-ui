import { ViewProps } from 'react-native';
import { PrimitiveTheme } from '../PrimitiveTheme';

export type ViewTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  ViewProps
>;

export type OptionalViewTheme<ComponentProps> = Partial<
  ViewTheme<ComponentProps>
>;
