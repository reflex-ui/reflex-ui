/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PrimitiveComponentProps, SurfacePropsBase } from '@reflex-ui/core';
import React, { forwardRef, Ref, useRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { animated, SpringConfig } from 'react-spring/native';

import { SliderPosition } from './SliderPosition';
// tslint:disable-next-line:max-line-length
import { useOpenCloseSliderPusherTransitionAnimation } from './useOpenCloseSliderPusherTransitionAnimation';

export interface AnimatedOpenCloseSliderTransitionPusherSurfaceProps<
  ComponentProps
> extends PrimitiveComponentProps<ComponentProps>, ViewProps {
  readonly children?: React.ReactNode;
  readonly closeAnimationConfig?: SpringConfig;
  readonly openAnimationConfig?: SpringConfig;
  readonly position: SliderPosition;
}

const AnimatedView = animated(View);

export const AnimatedOpenCloseSliderTransitionPusherSurface = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpenCloseSliderTransitionPusherSurfaceProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const {
      children,
      closeAnimationConfig,
      complexComponentProps,
      openAnimationConfig,
      position,
      ...otherProps
    } = props;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const compositeStyle = useOpenCloseSliderPusherTransitionAnimation({
      closeAnimationConfig,
      complexComponentProps,
      openAnimationConfig,
      position,
      ref: viewRef,
    });
    const style = {
      ...StyleSheet.flatten(props.style),
      ...compositeStyle.slider,
    };

    const renderedSurface = (
      // @ts-ignore Property 'children' does not exist on type
      // 'IntrinsicAttributes & AnimatedProps<ViewProps & RefAttributes<View>>'.
      <AnimatedView
        key="AnimatedOpenCloseSliderTransitionSurface"
        {...otherProps}
        ref={viewRef}
        // @ts-ignore
        style={style}
      >
        {children}
      </AnimatedView>
    );

    return (
      // @ts-ignore Property 'children' does not exist on type
      // 'IntrinsicAttributes & AnimatedProps<ViewProps & RefAttributes<View>>'.
      <AnimatedView
        key="AnimatedOpenCloseSliderTransitionPusherSurface"
        // @ts-ignore
        style={{
          display: 'flex',
          overflow: 'hidden',
          ...compositeStyle.pusher,
        }}
      >
        {renderedSurface}
      </AnimatedView>
    );
  },
);
