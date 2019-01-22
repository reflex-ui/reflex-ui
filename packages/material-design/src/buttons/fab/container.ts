/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  rawInjectableButtonViewSubTheme,
  Size,
  ViewStyleGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewProps, ViewStyle } from 'react-native';

import { getMidElevationStylesByInteraction } from '../../elevation';
import { getRaisedButtonContainerStyle } from '../raised/container';

export const fabButtonContainerSizedStyle: { [key in Size]: ViewStyle } = {
  xxsmall: {},
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 15,
    height: 30,
    minWidth: 30,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  small: {
    borderRadius: 20,
    height: 40,
    minWidth: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  medium: {
    borderRadius: 28,
    height: 56,
    minWidth: 56,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  large: {
    borderRadius: 33,
    height: 66,
    minWidth: 66,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  xlarge: {
    borderRadius: 40,
    height: 80,
    minWidth: 80,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  xxlarge: {},
};

export const getFabButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getRaisedButtonContainerStyle(props),
  ...getMidElevationStylesByInteraction(props.interactionState.type),
  ...fabButtonContainerSizedStyle[props.size],
});

export const fabButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = merge({}, rawInjectableButtonViewSubTheme, {
  getStyle: getFabButtonContainerStyle,
});
