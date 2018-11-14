import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

import { disabledDefaultButtonTextStyle } from '../default/text';

export const containedStaticButtonIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    disabled: {
      props: disabledDefaultButtonTextStyle,
    },
  },
};
