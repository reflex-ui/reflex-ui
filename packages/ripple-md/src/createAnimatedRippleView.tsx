/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  InteractionStateProps,
  PrimitiveComponentProps,
  SurfacePropsBase,
} from '@reflex-ui/core';
import React from 'react';

import { AnimatedRippleView, RippleColorGetter } from './AnimatedRippleView';

export const createAnimatedRippleView = <
  Props extends SurfacePropsBase<Props, Theme> & InteractionStateProps,
  Theme
>(
  getRippleColor: RippleColorGetter<Props>,
) =>
  function AnimatedRippleViewFactory(props: PrimitiveComponentProps<Props>) {
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
    return <AnimatedRippleView {...props} getRippleColor={getRippleColor} />;
  };
