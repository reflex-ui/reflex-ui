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
  RfxViewPropsBase,
} from '@reflex-ui/core';
import { RippleColorGetter } from '@reflex-ui/ripple-md';
import React from 'react';

import { AnimatedRippleElevationView } from './AnimatedRippleElevationView';

export const createAnimatedRippleElevationView = <
  Props extends RfxViewPropsBase<Props, Theme> & InteractionStateProps,
  Theme
>(
  elevation: Elevation,
  getRippleColor: RippleColorGetter<Props>,
) =>
  function AnimatedRippleElevationViewFactory(
    props: PrimitiveComponentProps<Props>,
  ) {
    const { complexComponentProps, ...otherProps } = props;
    return (
      <AnimatedRippleElevationView
        {...otherProps}
        complexComponentProps={{ ...complexComponentProps, elevation }}
        /*
         * I don't know why this error is hapenning, and how to fix it.
         * It needs further investigation, and there's a chance that this is
         * a TypeScript issue.
         */
        // @ts-ignore Type 'RippleColorGetter<Props>' is not assignable to type
        // 'RippleColorGetter<SurfacePropsBase<any, any>
        // & InteractionStateProps>'.
        // Type 'SurfacePropsBase<any, any> & InteractionStateProps'
        // is not assignable to type 'Props'.ts(2322)
        getRippleColor={getRippleColor}
      />
    );
  };
