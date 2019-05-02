/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  Elevation,
  InteractionStateProps,
  RfxViewPropsBase,
  ViewTheme,
} from '@reflex-ui/core';
import { RippleColorGetter } from '@reflex-ui/ripple-md';
import React from 'react';

import { AnimatedRippleElevationView } from './AnimatedRippleElevationView';

export const createAnimatedRippleElevationView = <
  Props extends RfxViewPropsBase<Props, Theme> & InteractionStateProps,
  Theme extends ViewTheme<Props>
>(
  elevation: Elevation,
  getRippleColor: RippleColorGetter<Props>,
) =>
  function AnimatedRippleElevationViewFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    const { complexComponentProps, ...otherProps } = props;
    return (
      <AnimatedRippleElevationView
        {...otherProps}
        complexComponentProps={{ ...complexComponentProps, elevation }}
        getRippleColor={getRippleColor}
      />
    );
  };
