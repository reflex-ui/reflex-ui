/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React, { forwardRef, Ref, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated, UseSpringProps } from 'react-spring/native';

import { useOpenCloseTransitionAnimation } from '../../transition';

export interface AnimatedOpenCloseTransitionSurfaceProps<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps>,
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
    const {
      children,
      closeAnimationProps,
      complexComponentProps,
      openAnimationProps,
      ...otherProps
    } = props;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const animatedStyle = useOpenCloseTransitionAnimation({
      closeAnimationProps,
      complexComponentProps,
      openAnimationProps,
    });
    const style = {
      ...StyleSheet.flatten(props.style),
      ...animatedStyle,
    };

    return (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpenCloseTransitionSurfaceView"
        {...otherProps}
        ref={viewRef}
        // @ts-ignore
        style={style}
      >
        {children}
      </AnimatedView>
    );
  },
);
