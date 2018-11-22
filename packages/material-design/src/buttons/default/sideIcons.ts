import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getDefaultButtonTextColorStyle } from './text';

export const getDefaultButtonIconProps: TextPropsGetter<
  ButtonProps
> = props => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

// tslint:disable-next-line:max-line-length
export const defaultStaticButtonLeadingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getDefaultButtonIconProps,
    },
  },
};

// tslint:disable-next-line:max-line-length
export const defaultStaticButtonTrailingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...defaultStaticButtonLeadingIconTheme,
};
