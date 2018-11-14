import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

import { disabledDefaultButtonTextStyle } from './text';

export const defaultStaticButtonIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    disabled: {
      props: disabledDefaultButtonTextStyle,
    },
  },
};
