import * as React from 'react';
import { InteractivityProps } from './InteractivityProps';

export type WithInteractivityStateFactory = <P extends InteractivityProps>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;
