import { OptionalButtonVariantTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

// prettier-ignore
import {
  containedStaticButtonTheme,
} from '../contained/containedStaticButtonTheme';
import {
  disabledRaisedButtonContainerProps,
  enabledRaisedButtonContainerProps,
  focusedRaisedButtonContainerProps,
  hoveredRaisedButtonContainerProps,
  pressedRaisedButtonContainerProps,
} from './RaisedButtonContainerProps';

export const partialRaisedStaticButtonTheme: OptionalButtonVariantTheme = {
  allSizes: {
    disabled: {
      container: {
        props: disabledRaisedButtonContainerProps,
      },
    },
    enabled: {
      container: {
        props: enabledRaisedButtonContainerProps,
      },
    },
    focused: {
      container: {
        props: focusedRaisedButtonContainerProps,
      },
    },
    hovered: {
      container: {
        props: hoveredRaisedButtonContainerProps,
      },
    },
    pressed: {
      container: {
        props: pressedRaisedButtonContainerProps,
      },
    },
  },
};

export const raisedStaticButtonTheme: OptionalButtonVariantTheme = merge<
  {},
  OptionalButtonVariantTheme,
  OptionalButtonVariantTheme
>({}, containedStaticButtonTheme, partialRaisedStaticButtonTheme);
