import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
} from '@reflex-ui/core';

import { allVariantsButtonIconTheme } from './icon';

// tslint:disable-next-line:max-line-length
export const allVariantsButtonLeadingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      props:
        allVariantsButtonIconTheme.allSizes &&
        allVariantsButtonIconTheme.allSizes.allStates
          ? allVariantsButtonIconTheme.allSizes.allStates.props
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
export const allVariantsButtonTrailingIconTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  ...allVariantsButtonLeadingIconTheme,
};
