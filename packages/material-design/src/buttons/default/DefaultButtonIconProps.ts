import { SpecialButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getDefaultButtonTextColorStyle } from './DefaultButtonTextProps';

export const getDefaultButtonLeftIconProps: TextPropsGetter<
  SpecialButtonProps
> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});
