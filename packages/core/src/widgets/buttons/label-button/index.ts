import * as React from 'react';

import { createWithInteractivityState } from '../../../interactivity';
// import { Button } from './LabelButton';
import { DefaultButtonProps, ThemedButton, Variant } from './StyledLabelButton';

const LabelButton: React.ComponentType<
  DefaultButtonProps
> = createWithInteractivityState(ThemedButton);

// export { Button as RawLabelButton };
export { LabelButton };
export { Variant as LabelButtonVariant };
