import * as React from 'react';
import { InteractiveComponent } from './InteractiveComponent';

export type WithInteractivityStateFactory = <P extends InteractiveComponent>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;
