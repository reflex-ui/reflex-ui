import { ViewProps } from 'react-native';

import { ReflexSubcomponent } from '../ReflexSubcomponent';
import { IconWrapperProps } from './IconWrapperProps';

export interface IconWrapperSubcomponents {
  readonly Container: React.ComponentType<
    ReflexSubcomponent<IconWrapperProps> & ViewProps
  >;
}

export interface OptionalIconWrapperSubcomponents {
  readonly Container?: React.ComponentType<
    ReflexSubcomponent<IconWrapperProps> & ViewProps
  >;
}
