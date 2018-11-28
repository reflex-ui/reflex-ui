import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

// prettier-ignore
import {
  getThemedInlayColorByInteractivity,
} from '../../palette/getThemedInlayColorByInteractivity';

export const getContainedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getContainedButtonContainerStyle(props),
});

export const getContainedButtonContainerStyle: ViewStyleGetter<ButtonProps> = ({
  colorTheme,
  interactivityState,
  paletteTheme,
}) => ({
  backgroundColor: getThemedInlayColorByInteractivity({
    colorTheme,
    interactivityType: interactivityState.type,
    paletteTheme,
  }),
});

export const containedButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getContainedButtonContainerProps,
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          height: 40,
          minWidth: 72,
          paddingHorizontal: 20,
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
          paddingHorizontal: 16,
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
          paddingHorizontal: 16,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          height: 48,
          minWidth: 82,
          paddingHorizontal: 28,
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
          paddingHorizontal: 8,
        },
      },
    },
  },
};
