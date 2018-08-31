import { Button } from './LabelButton';
import { ThemedButton, Variant } from './StyledLabelButton';

import { createWithInteractivityState } from '../../../interactivity';

const EnhancedButton = createWithInteractivityState(ThemedButton);

export { Button as RawLabelButton };
export { EnhancedButton as LabelButton };
export { Variant as LabelButtonVariant };
