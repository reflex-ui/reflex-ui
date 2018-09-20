import * as React from 'react';

import { createFullFeaturedButton } from './createFullFeaturedButton';
import { OptionalButtonProps } from './SimpleButton';

const Button: React.ComponentType<
  OptionalButtonProps
> = createFullFeaturedButton();

// export { Button as RawLabelButton };
export { Button };
export * from './SimpleButton';
export * from './withOptionalButtonProps';
