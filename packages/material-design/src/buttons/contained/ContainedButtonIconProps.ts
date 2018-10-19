import { SpecialButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getContainedButtonTextColorStyle } from './ContainedButtonTextProps';

export const getContainedButtonLeftIconProps: TextPropsGetter<
  SpecialButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});
