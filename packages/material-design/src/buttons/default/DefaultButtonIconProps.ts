import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getDefaultButtonTextColorStyle } from './DefaultButtonTextProps';

export const getDefaultButtonLeftIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});
