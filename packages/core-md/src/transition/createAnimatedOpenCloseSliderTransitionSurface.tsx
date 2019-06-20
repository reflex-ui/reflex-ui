/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React from 'react';

// tslint:disable-next-line:max-line-length
import { AnimatedOpenCloseSliderTransitionSurface } from './AnimatedOpenCloseSliderTransitionSurface';
import { SliderPosition } from './SliderPosition';

export const createAnimatedOpenCloseSliderTransitionSurface = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  position: SliderPosition,
) =>
  function AnimatedOpenCloseTransitionSurfaceFactory(
    props: PrimitiveComponentProps<Props>,
  ) {
    return (
      <AnimatedOpenCloseSliderTransitionSurface
        position={position}
        {...props}
      />
    );
  };
