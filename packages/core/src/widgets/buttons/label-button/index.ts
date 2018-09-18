import * as React from 'react';

import { createWithInteractivityState } from '../../../interactivity';
// import { Button } from './LabelButton';
import {
  OptionalButtonProps,
  ThemedButton,
  Variant,
} from './StyledLabelButton';

const LabelButton: React.ComponentType<
  OptionalButtonProps
> = createWithInteractivityState(ThemedButton);

// export { Button as RawLabelButton };
export { LabelButton };
export { Variant as LabelButtonVariant };
