/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ComponentThemeGetter,
  SizedData,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { getMidElevationStylesByInteraction } from '../../../elevation';
import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getRaisedButtonContainerStyle } from '../raised/container';

export const fabButtonContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: {
    borderRadius: 16,
    height: 32,
    minWidth: 32,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: {
    borderRadius: 20,
    height: 40,
    minWidth: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  small: {
    borderRadius: 24,
    height: 48,
    minWidth: 48,
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
    borderRadius: 32,
    height: 64,
    minWidth: 64,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  xlarge: {
    borderRadius: 36,
    height: 72,
    minWidth: 72,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  xxlarge: {
    borderRadius: 44,
    height: 88,
    minWidth: 88,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
};

export const getFabButtonContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  ...getRaisedButtonContainerStyle(props),
  ...getMidElevationStylesByInteraction(props.interactionState.type),
  ...(props.size && fabButtonContainerSizedStyle[props.size]),
});

export const getFabButtonSurfaceTheme: ComponentThemeGetter<
  ButtonProps,
  SurfaceTheme
> = () => ({
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getFabButtonContainerStyle,
});
