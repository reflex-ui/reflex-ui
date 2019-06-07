/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInSimpleComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React from 'react';
import { UseSpringProps } from 'react-spring/native';

// tslint:disable-next-line:max-line-length
import { AnimatedOpenCloseTransitionSurface } from './AnimatedOpenCloseTransitionSurface';

export interface AnimatedOpenCloseTransitionSurfaceFactoryInput {
  readonly closeAnimationProps?: UseSpringProps;
  readonly openAnimationProps?: UseSpringProps;
}

export const createAnimatedOpenCloseTransitionSurface = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>({
  closeAnimationProps,
  openAnimationProps,
}: AnimatedOpenCloseTransitionSurfaceFactoryInput) =>
  function AnimatedOpenCloseTransitionSurfaceFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return (
      <AnimatedOpenCloseTransitionSurface
        closeAnimationProps={closeAnimationProps}
        openAnimationProps={openAnimationProps}
        {...props}
      />
    );
  };
