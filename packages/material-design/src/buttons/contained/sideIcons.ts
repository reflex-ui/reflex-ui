import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getContainedButtonTextColorStyle } from './text';

export const getContainedButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getContainedButtonTextColorStyle(props),
  },
});

// tslint:disable-next-line:max-line-length
export const containedStaticButtonLeadingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getContainedButtonIconProps,
    },
  },
};

// tslint:disable-next-line:max-line-length
export const containedStaticButtonTrailingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...containedStaticButtonLeadingIconTheme,
};
