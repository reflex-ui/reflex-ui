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
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getLowElevationStylesByInteractivity } from '../../elevation';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getRaisedButtonContainerStyle(props),
});

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getLowElevationStylesByInteractivity(props.interactivityState.type),
});

export const raisedButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getRaisedButtonContainerProps,
    },
  },
};
