import { SpecialButtonProps, TextPropsGetter } from '@reflex-ui/core';
import { getDefaultButtonTextColorStyle } from '../default';

export const getCommonOutlinedButtonTextProps: TextPropsGetter<
  SpecialButtonProps
> = (props: SpecialButtonProps) => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});
