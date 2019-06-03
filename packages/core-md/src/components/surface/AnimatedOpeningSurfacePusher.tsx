/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  moveTransformPropsToTransformArray,
  SurfacePropsBase,
} from '@reflex-ui/core';
import React, { forwardRef, Ref, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated, useSpring, UseSpringProps } from 'react-spring/native';

export interface AnimatedOpeningSurfacePusherProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly closePusherAnimationProps: UseSpringProps;
  readonly closeSurfaceAnimationProps?: UseSpringProps;
  readonly openPusherAnimationProps: UseSpringProps;
  readonly openSurfaceAnimationProps?: UseSpringProps;
}

const AnimatedView = animated(View);

export const AnimatedOpeningSurfacePusher = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpeningSurfacePusherProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const {
      children,
      complexComponentProps,
      closePusherAnimationProps,
      closeSurfaceAnimationProps,
      openPusherAnimationProps,
      openSurfaceAnimationProps,
      ...otherProps
    } = props;
    const { isOpen } = complexComponentProps;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const pusherAnimationProps = useSpring(
      isOpen ? openPusherAnimationProps : closePusherAnimationProps,
    );

    /*
     * Since we cannot have hooks inside conditions,
     * and we cannot pass undefined to useSpring,
     * a simple solution is to introduce this emptyAnimationProps
     * object when we don't have surface animation props.
     */
    const emptyAnimationProps = {
      config: { clamp: true, tension: 220, friction: 16 },
    };
    const surfaceAnimationProps = useSpring(
      isOpen
        ? openSurfaceAnimationProps || emptyAnimationProps
        : closeSurfaceAnimationProps || emptyAnimationProps,
    );
    /**/

    // tslint:disable-next-line:max-line-length
    const surfaceAnimationPropsWithTransformHandled = moveTransformPropsToTransformArray(
      surfaceAnimationProps,
    );

    const finalSurfaceStyle = {
      ...StyleSheet.flatten(props.style),
      ...surfaceAnimationPropsWithTransformHandled,
    };

    const renderedAnimatedOpeningView = (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpeningView"
        {...otherProps}
        ref={viewRef}
        style={finalSurfaceStyle}
      >
        {children}
      </AnimatedView>
    );

    return (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpeningViewPusher"
        style={{
          display: 'flex',
          height: '100%',
          overflow: 'hidden',
          ...pusherAnimationProps,
        }}
      >
        {renderedAnimatedOpeningView}
      </AnimatedView>
    );
  },
);
