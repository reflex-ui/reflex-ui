import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';

// prettier-ignore
import {
  getDefaultButtonTextColorStyle,
} from '../default/DefaultButtonTextProps';

export const getIconButtonIconProps: TextPropsGetter<ButtonProps> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});
