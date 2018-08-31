import { Button } from './LabelButton';
import { IStyledLabelButton, ThemedButton, Variant } from './StyledLabelButton';

import { withMouseEvents } from '../../../styles';

const EnhancedButton: IStyledLabelButton = withMouseEvents(ThemedButton);

export { Button as RawLabelButton };
export { EnhancedButton as LabelButton };
export { Variant as LabelButtonVariant };
