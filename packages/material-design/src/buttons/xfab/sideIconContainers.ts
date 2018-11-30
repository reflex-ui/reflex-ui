/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
} from '@reflex-ui/core';

// tslint:disable-next-line:max-line-length
export const xfabButtonLeadingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: 14,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: 12,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: 10,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: 18,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: 8,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const xfabButtonTrailingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginStart: 14,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginStart: 12,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginStart: 10,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginStart: 18,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginStart: 8,
        },
      },
    },
  },
};
