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
import React, { forwardRef, Ref, useCallback, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated, useSpring, UseSpringProps } from 'react-spring/native';

export interface AnimatedOpenCloseTransitionSurfacePusherProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
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
      // closeSurfaceAnimationProps,
      openPusherAnimationProps,
      // openSurfaceAnimationProps,
      ...otherProps
    } = props;
    const { isOpen } = complexComponentProps;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const pusherAnimationProps = useSpring(
      isOpen ? openPusherAnimationProps : closePusherAnimationProps,
    );

    const onOpenRest = useCallback(() => {
      if (
        complexComponentProps.componentDidOpen !== undefined &&
        complexComponentProps.isOpening
      ) {
        complexComponentProps.componentDidOpen(complexComponentProps);
      }
    }, [complexComponentProps]);

    const onCloseRest = useCallback(() => {
      if (
        complexComponentProps.componentDidClose !== undefined &&
        complexComponentProps.isClosing
      ) {
        complexComponentProps.componentDidClose(complexComponentProps);
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
        // onRest: onOpenRest,
        ...(complexComponentProps.componentDidOpen !== undefined && {
          onRest: onOpenRest,
        }),
        // onStart: onOpenStart,
      };
    }

    let closeSurfaceAnimationProps = props.closeSurfaceAnimationProps;
    if (closeSurfaceAnimationProps === undefined) {
      closeSurfaceAnimationProps = emptyAnimationProps;
    } else if (closeSurfaceAnimationProps.onRest === undefined) {
      closeSurfaceAnimationProps = {
        ...closeSurfaceAnimationProps,
        // onRest: onCloseRest,
        ...(complexComponentProps.componentDidClose !== undefined && {
          onRest: onCloseRest,
        }),
        // onStart: onCloseStart,
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
