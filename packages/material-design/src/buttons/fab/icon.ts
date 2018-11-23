import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getContainedButtonTextColorStyle } from '../contained/text';

export const getFabButtonIconProps: TextPropsGetter<ButtonProps> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});

export const fabStaticButtonIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getFabButtonIconProps,
    },
  },
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
