import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

import { allVariantsStaticButtonIconTheme } from './icon';

// tslint:disable-next-line:max-line-length
export const allVariantsStaticButtonLeadingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props:
        allVariantsStaticButtonIconTheme.allSizes &&
        allVariantsStaticButtonIconTheme.allSizes.allStates
          ? allVariantsStaticButtonIconTheme.allSizes.allStates.props
          : undefined,
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          fontSize: 19,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          fontSize: 18,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          fontSize: 17,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          fontSize: 20,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          fontSize: 15,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const allVariantsStaticButtonTrailingIconTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...allVariantsStaticButtonLeadingIconTheme,
};
