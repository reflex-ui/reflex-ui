import {
  ButtonProps,
  OptionalInteractivityStateTheme,
  OptionalSizedSubcomponentTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';

import { getMidElevationStylesByInteractivity } from '../../elevation';
import { getRaisedButtonContainerProps } from '../raised/container';

export const getFabButtonContainerProps: ViewPropsGetter<ButtonProps> = props =>
  merge(getRaisedButtonContainerProps(props), {
    style: getFabButtonContainerStyle(props),
  });

export const getFabButtonContainerStyle: ViewStyleGetter<ButtonProps> = ({
  interactivityState,
}) => ({
  ...getMidElevationStylesByInteractivity(interactivityState.type),
});

export const fabStaticButtonContainerTheme: OptionalSizedSubcomponentTheme<
  OptionalInteractivityStateTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getFabButtonContainerProps,
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          borderRadius: 33,
          height: 66,
          minWidth: 66,
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          borderRadius: 28,
          height: 56,
          minWidth: 56,
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          borderRadius: 20,
          height: 40,
          minWidth: 40,
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderRadius: 40,
          height: 80,
          minWidth: 80,
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          borderRadius: 15,
          height: 30,
          minWidth: 30,
          paddingHorizontal: 0,
          paddingVertical: 0,
        },
      },
    },
  },
};
