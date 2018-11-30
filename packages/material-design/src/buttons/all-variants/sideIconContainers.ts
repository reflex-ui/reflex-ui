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
export const allVariantsButtonLeadingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: 10,
          marginStart: -6,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: 8,
          marginStart: -4,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: 7,
          marginStart: -3,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: 12,
          marginStart: -8,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: 6,
          marginStart: -2,
        },
      },
    },
  },
};

// tslint:disable-next-line:max-line-length
export const allVariantsButtonTrailingIconContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  large: {
    allStates: {
      props: {
        style: {
          marginEnd: -6,
          marginStart: 10,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          marginEnd: -4,
          marginStart: 8,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          marginEnd: -3,
          marginStart: 7,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          marginEnd: -8,
          marginStart: 12,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          marginEnd: -2,
          marginStart: 6,
        },
      },
    },
  },
};
