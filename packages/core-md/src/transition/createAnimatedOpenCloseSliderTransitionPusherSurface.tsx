/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React from 'react';

// tslint:disable-next-line:max-line-length
import { AnimatedOpenCloseSliderTransitionPusherSurface } from './AnimatedOpenCloseSliderTransitionPusherSurface';
// tslint:disable-next-line:max-line-length
import { OpenCloseSliderTransitionFactoryInput } from './OpenCloseSliderTransitionFactoryInput';

export const createAnimatedOpenCloseSliderTransitionPusherSurface = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>({
  closeAnimationConfig,
  openAnimationConfig,
  position,
}: OpenCloseSliderTransitionFactoryInput) =>
  function AnimatedOpenCloseTransitionPusherSurfaceFactory(
    props: PrimitiveComponentProps<Props>,
  ) {
    return (
      <AnimatedOpenCloseSliderTransitionPusherSurface
        closeAnimationConfig={closeAnimationConfig}
        openAnimationConfig={openAnimationConfig}
        position={position}
        {...props}
      />
    );
  };
