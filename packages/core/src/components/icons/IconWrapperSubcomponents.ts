import { ViewProps } from 'react-native';

import { SubProps } from '../SubProps';
import { IconWrapperProps } from './IconWrapperProps';

export interface IconWrapperSubcomponents {
  readonly Container: React.ComponentType<
    SubProps<IconWrapperProps> & ViewProps
  >;
}

export type OptionalIconWrapperSubcomponents = Partial<
  IconWrapperSubcomponents
>;
