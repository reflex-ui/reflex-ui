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
import { AnimatedElevationView } from './AnimatedElevationView';

export const createAnimatedElevationView = <
  Props extends RfxViewPropsBase<Props, Theme> & InteractionStateProps,
  Theme extends ViewTheme<Props>
>(
  elevationDegree: ElevationDegree,
) =>
  function AnimatedElevationViewFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return (
      <AnimatedElevationView {...props} elevationDegree={elevationDegree} />
    );
  };
