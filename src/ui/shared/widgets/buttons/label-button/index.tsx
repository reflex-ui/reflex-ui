import LabelButton from './LabelButton';
import StyledLabelButton, {
  IStyledLabelButton,
  StyledLabelButtonProps,
  Variant,
} from './StyledLabelButton';

import { withMouseEvents } from '../../../styles';

const EnhancedStyledLabelButton: IStyledLabelButton = withMouseEvents<
  StyledLabelButtonProps
>(StyledLabelButton);

export { LabelButton as RawLabelButton };
export { EnhancedStyledLabelButton as LabelButton };
export { Variant as LabelButtonVariant };
