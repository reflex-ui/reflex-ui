/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInSimpleComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React from 'react';
import { UseSpringProps } from 'react-spring/native';

import { AnimatedOpeningSurfacePusher } from './AnimatedOpeningSurfacePusher';

export interface AnimatedOpeningSurfacePusherFactoryInput {
  readonly closePusherAnimationProps: UseSpringProps;
  readonly closeSurfaceAnimationProps?: UseSpringProps;
  readonly openPusherAnimationProps: UseSpringProps;
  readonly openSurfaceAnimationProps?: UseSpringProps;
}

export const createAnimatedOpeningSurfacePusher = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  input: AnimatedOpeningSurfacePusherFactoryInput,
) =>
  function AnimatedOpeningSurfacePusherFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return (
      <AnimatedOpeningSurfacePusher
        closePusherAnimationProps={input.closePusherAnimationProps}
        closeSurfaceAnimationProps={input.closeSurfaceAnimationProps}
        openPusherAnimationProps={input.openPusherAnimationProps}
        openSurfaceAnimationProps={input.openSurfaceAnimationProps}
        {...props}
      />
    );
  };
