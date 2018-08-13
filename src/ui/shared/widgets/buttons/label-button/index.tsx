import LabelButton from './LabelButton';
import StyledLabelButton, {
  IStyledLabelButton,
  StyledLabelButtonProps,
} from './StyledLabelButton';

import { withMouseEvents } from '../../../styles';

const EnhancedStyledLabelButton: IStyledLabelButton = withMouseEvents<
  StyledLabelButtonProps
>(StyledLabelButton);

export { LabelButton as RawLabelButton };
export { EnhancedStyledLabelButton as LabelButton };
