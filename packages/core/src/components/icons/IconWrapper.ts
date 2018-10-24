import * as React from 'react';

import { OptionalIconWrapperProps } from './IconWrapperProps';
import { SimpleIconWrapper } from './SimpleIconWrapper';
import { withOptionalIconWrapperProps } from './withOptionalIconWrapperProps';

const IconWrapper: React.ComponentType<
  OptionalIconWrapperProps
> = withOptionalIconWrapperProps(SimpleIconWrapper);

export { IconWrapper };
