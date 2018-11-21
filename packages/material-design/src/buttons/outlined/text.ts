import {
  ButtonProps,
  OptionalInteractivityStateTheme,
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
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getOutlinedButtonTextProps,
    },
  },
};
