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

export interface AnimatedOpenCloseTransitionSurfaceProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly closeAnimationProps?: UseSpringProps;
  readonly openAnimationProps?: UseSpringProps;
}

const AnimatedView = animated(View);

export const AnimatedOpenCloseTransitionSurface = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpenCloseTransitionSurfaceProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const { children, complexComponentProps, ...otherProps } = props;
    const {
      componentDidClose,
      componentDidOpen,
      isClosing,
      isOpen,
      isOpening,
    } = complexComponentProps;

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

    let openAnimationProps = props.openAnimationProps;
    if (openAnimationProps === undefined) {
      openAnimationProps = emptyAnimationProps;
    } else if (openAnimationProps.onRest === undefined) {
      openAnimationProps = {
        ...openAnimationProps,
        ...(componentDidOpen !== undefined && { onRest: onOpenRest }),
      };
    }

    let closeAnimationProps = props.closeAnimationProps;
    if (closeAnimationProps === undefined) {
      closeAnimationProps = emptyAnimationProps;
    } else if (closeAnimationProps.onRest === undefined) {
      closeAnimationProps = {
        ...closeAnimationProps,
        ...(componentDidClose !== undefined && { onRest: onCloseRest }),
      };
    }

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const animationProps = useSpring(
      isOpen ? openAnimationProps : closeAnimationProps,
    );

    // tslint:disable-next-line:max-line-length
    const animationPropsWithTransformHandled = moveTransformPropsToTransformArray(
      animationProps,
    );

    const finalStyle = {
      ...StyleSheet.flatten(props.style),
      ...animationPropsWithTransformHandled,
    };

    return (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpenCloseTransitionSurfaceView"
        {...otherProps}
        ref={viewRef}
        style={finalStyle}
      >
        {children}
      </AnimatedView>
    );
  },
);
