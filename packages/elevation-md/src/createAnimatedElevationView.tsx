/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Elevation,
  InteractionStateProps,
  PrimitiveComponentProps,
  SurfacePropsBase,
} from '@reflex-ui/core';
import React from 'react';

import { AnimatedElevationView } from './AnimatedElevationView';

export const createAnimatedElevationView = <
  Props extends SurfacePropsBase<Props, Theme> & InteractionStateProps,
  Theme
>(
  elevation: Elevation,
) =>
  function AnimatedElevationViewFactory(props: PrimitiveComponentProps<Props>) {
    const { complexComponentProps, ...otherProps } = props;
    return (
      <AnimatedElevationView
        {...otherProps}
        complexComponentProps={{ ...complexComponentProps, elevation }}
      />
    );
  };
