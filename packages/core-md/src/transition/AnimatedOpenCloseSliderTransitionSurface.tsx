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

import { SliderPosition } from './SliderPosition';
// tslint:disable-next-line:max-line-length
import { useOpenCloseSliderTransitionAnimation } from './useOpenCloseSliderTransitionAnimation';

export interface AnimatedOpenCloseSliderTransitionSurfaceProps<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly position: SliderPosition;
}

const AnimatedView = animated(View);

export const AnimatedOpenCloseSliderTransitionSurface = forwardRef(
  <ComponentProps extends SurfacePropsBase<ComponentProps, Theme>, Theme>(
    props: AnimatedOpenCloseSliderTransitionSurfaceProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const { children, complexComponentProps, position, ...otherProps } = props;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;

    const animatedStyle = useOpenCloseSliderTransitionAnimation({
      complexComponentProps,
      position,
      ref: viewRef,
    });
    const style = {
      ...StyleSheet.flatten(props.style),
      ...animatedStyle,
    };

    return (
      // @ts-ignore Type instantiation is excessively
      // deep and possibly infinite.ts(2589)
      <AnimatedView
        key="AnimatedOpenCloseSliderTransitionSurface"
        {...otherProps}
        ref={viewRef}
        style={style}
      >
        {children}
      </AnimatedView>
    );
  },
);
