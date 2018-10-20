import { ButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getDefaultButtonTextColorStyle } from '../default';

export const getCommonOutlinedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});
