import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedStaticButtonIconTheme } from '../contained/icon';

export const partialFabStaticButtonIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  small: {
    allStates: {
      props: {
        style: {
          fontSize: 24,
        },
      },
    },
  },
};

export const fabStaticButtonIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = merge<
  {},
  OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >,
  OptionalSizedSubcomponentTheme<
    OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
  >
>({}, containedStaticButtonIconTheme, partialFabStaticButtonIconTheme);
