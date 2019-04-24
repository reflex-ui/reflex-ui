/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  InteractionStateProps,
  RfxViewPropsBase,
  ViewTheme,
} from '@reflex-ui/core';
import React from 'react';

import { ElevationDegree } from '../../elevation/ElevationDegree';
import { AnimatedRippleElevationView } from './AnimatedRippleElevationView';
import { RippleColorGetter } from './AnimatedRippleView';

export const createAnimatedRippleElevationView = <
  Props extends RfxViewPropsBase<Props, Theme> & InteractionStateProps,
  Theme extends ViewTheme<Props>
>(
  elevationDegree: ElevationDegree,
  getRippleColor: RippleColorGetter<Props>,
) =>
  function AnimatedRippleElevationViewFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return (
      <AnimatedRippleElevationView
        {...props}
        elevationDegree={elevationDegree}
        getRippleColor={getRippleColor}
      />
    );
  };
