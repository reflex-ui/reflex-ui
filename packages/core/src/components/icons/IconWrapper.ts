import * as React from 'react';

import { OptionalIconWrapperProps } from './IconWrapperProps';
import { SimpleIconWrapper } from './SimpleIconWrapper';
import { withDefaultIconWrapperProps } from './withDefaultIconWrapperProps';

const IconWrapper: React.ComponentType<
  OptionalIconWrapperProps
> = withDefaultIconWrapperProps(SimpleIconWrapper);

export { IconWrapper };
