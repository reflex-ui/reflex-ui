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
import { AnimatedOpenCloseTransitionSurfacePusher } from './AnimatedOpenCloseTransitionSurfacePusher';

export interface AnimatedOpenCloseTransitionSurfacePusherFactoryInput {
  readonly closePusherAnimationProps: UseSpringProps;
  readonly closeSurfaceAnimationProps?: UseSpringProps;
  readonly openPusherAnimationProps: UseSpringProps;
  readonly openSurfaceAnimationProps?: UseSpringProps;
}

export const createAnimatedOpenCloseTransitionSurfacePusher = <
  Props extends SurfacePropsBase<Props, Theme>,
  Theme
>(
  input: AnimatedOpenCloseTransitionSurfacePusherFactoryInput,
) =>
  function AnimatedOpenCloseTransitionSurfacePusherFactory(
    props: BuiltInSimpleComponentProps<Props>,
  ) {
    return (
      <AnimatedOpenCloseTransitionSurfacePusher
        closePusherAnimationProps={input.closePusherAnimationProps}
        closeSurfaceAnimationProps={input.closeSurfaceAnimationProps}
        openPusherAnimationProps={input.openPusherAnimationProps}
        openSurfaceAnimationProps={input.openSurfaceAnimationProps}
        {...props}
      />
    );
  };
