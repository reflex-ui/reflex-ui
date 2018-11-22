import { ViewProps } from 'react-native';

import { ReflexSubcomponent } from '../ReflexSubcomponent';
import { IconWrapperProps } from './IconWrapperProps';

export interface IconSubComponents {
  readonly Container: React.ComponentType<
    ReflexSubcomponent<IconWrapperProps> & ViewProps
  >;
}

export interface OptionalIconSubComponents {
  readonly Container?: React.ComponentType<
    ReflexSubcomponent<IconWrapperProps> & ViewProps
  >;
}
