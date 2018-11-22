import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getDefaultButtonTextColorStyle } from '../default/text';

export const getOutlinedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

export const outlinedStaticButtonTextTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getOutlinedButtonTextProps,
    },
  },
};
