import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getDefaultButtonTextColorStyle } from '../default/text';

export const getIconButtonIconProps: TextPropsGetter<ButtonProps> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

export const iconStaticButtonIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getIconButtonIconProps,
    },
  },
};
