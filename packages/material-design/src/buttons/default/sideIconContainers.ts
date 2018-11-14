import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
export const defaultStaticButtonLeadingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          marginStart: 0,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const defaultStaticButtonTrailingIconContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props: {
        style: {
          marginEnd: 0,
        },
      },
    },
  },
};
