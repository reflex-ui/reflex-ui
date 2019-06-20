/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  moveTransformPropsToTransformArray,
  PrimitiveComponentProps,
  SurfacePropsBase,
} from '@reflex-ui/core';
import React, { forwardRef, Ref, useCallback, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated, useSpring, UseSpringProps } from 'react-spring/native';

export interface AnimatedOpenCloseTransitionSurfacePusherProps<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly closePusherAnimationProps: UseSpringProps;
  readonly closeSurfaceAnimationProps?: UseSpringProps;
  readonly openPusherAnimationProps: UseSpringProps;
  readonly openSurfaceAnimationProps?: UseSpringProps;
}

const AnimatedView = animated(View);

export const AnimatedOpenCloseTransitionSurfacePusher = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpenCloseTransitionSurfacePusherProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const {
      children,
      complexComponentProps,
      closePusherAnimationProps,
      openPusherAnimationProps,
      ...otherProps
    } = props;
    const {
      componentDidClose,
      componentDidOpen,
      isClosing,
      isOpen,
      isOpening,
    } = complexComponentProps;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const pusherAnimationProps = useSpring(
      isOpen ? openPusherAnimationProps : closePusherAnimationProps,
    );

    const onOpenRest = useCallback(() => {
      if (componentDidOpen !== undefined && isOpening) {
        componentDidOpen(complexComponentProps);
      }
    }, [complexComponentProps]);

    const onCloseRest = useCallback(() => {
      if (componentDidClose !== undefined && isClosing) {
        componentDidClose(complexComponentProps);
      }
    }, [complexComponentProps]);

    /*
     * Since we cannot have hooks inside conditions (useSpring in this case),
     * and we cannot pass undefined to useSpring,
     * a simple solution is to introduce this emptyAnimationProps
     * object when we don't have surface animation props.
     */
    const emptyAnimationProps = {
      config: { clamp: true, tension: 220, friction: 16 },
    };
    /**/

    let openSurfaceAnimationProps = props.openSurfaceAnimationProps;
    if (openSurfaceAnimationProps === undefined) {
      openSurfaceAnimationProps = emptyAnimationProps;
    } else if (openSurfaceAnimationProps.onRest === undefined) {
      openSurfaceAnimationProps = {
        ...openSurfaceAnimationProps,
        ...(componentDidOpen !== undefined && {
          onRest: onOpenRest,
        }),
      };
    }

    let closeSurfaceAnimationProps = props.closeSurfaceAnimationProps;
    if (closeSurfaceAnimationProps === undefined) {
      closeSurfaceAnimationProps = emptyAnimationProps;
    } else if (closeSurfaceAnimationProps.onRest === undefined) {
      closeSurfaceAnimationProps = {
        ...closeSurfaceAnimationProps,
        ...(componentDidClose !== undefined && {
          onRest: onCloseRest,
        }),
      };
    }

    const surfaceAnimationProps = useSpring(
      isOpen ? openSurfaceAnimationProps : closeSurfaceAnimationProps,
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
        key="AnimatedOpenCloseTransitionSurfaceView"
        {...otherProps}
        ref={viewRef}
        // @ts-ignore
        style={finalSurfaceStyle}
      >
        {children}
      </AnimatedView>
    );

    return (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpenCloseTransitionSurfacePusherView"
        style={{
          // display: isOpen || isClosing ? 'flex' : 'none',
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
