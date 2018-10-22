import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getContainedButtonTextColorStyle } from './ContainedButtonTextProps';

export const getContainedButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});
