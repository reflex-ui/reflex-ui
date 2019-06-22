/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React, { forwardRef, Ref, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated } from 'react-spring/native';

// tslint:disable-next-line:max-line-length
import { AnimatedOpenCloseSliderTransitionConfig } from './AnimatedOpenCloseSliderTransitionConfig';
// tslint:disable-next-line:max-line-length
import { useOpenCloseSliderTransitionAnimation } from './useOpenCloseSliderTransitionAnimation';

export interface AnimatedOpenCloseSliderTransitionSurfaceProps<ComponentProps>
  extends AnimatedOpenCloseSliderTransitionConfig,
    PrimitiveComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
}

const AnimatedView = animated(View);

export const AnimatedOpenCloseSliderTransitionSurface = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpenCloseSliderTransitionSurfaceProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const {
      children,
      closeAnimationConfig,
      complexComponentProps,
      hasPusher,
      openAnimationConfig,
      position,
      ...otherProps
    } = props;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const animationStyle = useOpenCloseSliderTransitionAnimation({
      closeAnimationConfig,
      complexComponentProps,
      hasPusher,
      openAnimationConfig,
      position,
      ref: viewRef,
    });

    const surfaceStyle = {
      ...StyleSheet.flatten(props.style),
      ...animationStyle.slider,
    };

    const renderedSurface = (
      // @ts-ignore Property 'children' does not exist on type
      // 'IntrinsicAttributes & AnimatedProps<ViewProps & RefAttributes<View>>'.
      <AnimatedView
        key="AnimatedOpenCloseSliderTransitionSurface"
        {...otherProps}
        ref={viewRef}
        style={surfaceStyle}
      >
        {children}
      </AnimatedView>
    );

    if (hasPusher && animationStyle.pusher) {
      return (
        // @ts-ignore Property 'children' does not exist on type
        // 'IntrinsicAttributes &
        // AnimatedProps<ViewProps & RefAttributes<View>>'.
        <AnimatedView
          key="AnimatedOpenCloseSliderTransitionPusherSurface"
          style={{
            display: 'flex',
            overflow: 'hidden',
            ...animationStyle.pusher,
          }}
        >
          {renderedSurface}
        </AnimatedView>
      );
    }

    return renderedSurface;
  },
);
