/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  InteractionStateProps,
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
  function AnimatedRippleViewFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return <AnimatedRippleView {...props} getRippleColor={getRippleColor} />;
  };
