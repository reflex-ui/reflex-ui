import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getContainedButtonTextColorStyle } from './ContainedButtonTextProps';

export const getContainedButtonLeftIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});
