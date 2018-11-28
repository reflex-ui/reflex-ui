import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getThemedOverlayColorByInteractivity } from '../../palette';

export const getDefaultButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getDefaultButtonContainerStyle(props),
});

export const getDefaultButtonContainerStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  paletteTheme,
}) => ({
  backgroundColor: getThemedOverlayColorByInteractivity({
    colorTheme,
    interactivityType: interactivityState.type,
    paletteTheme,
  }),
});

export const defaultButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getDefaultButtonContainerProps,
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          height: 40,
          minWidth: 64,
          paddingHorizontal: 8,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          height: 36,
          minWidth: 64,
          paddingHorizontal: 8,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          height: 32,
          minWidth: 64,
          paddingHorizontal: 8,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          height: 48,
          minWidth: 70,
          paddingHorizontal: 12,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          height: 28,
          minWidth: 54,
          paddingHorizontal: 4,
        },
      },
    },
  },
};
