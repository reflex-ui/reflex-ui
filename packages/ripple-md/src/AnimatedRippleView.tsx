/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BuiltInSimpleComponentProps,
  InteractionStateProps,
  SurfacePropsBase,
  useTimeout,
} from '@reflex-ui/core';
import React, {
  forwardRef,
  MutableRefObject,
  Ref,
  useRef,
  useState,
} from 'react';
import { View, ViewProps } from 'react-native';
import { animated } from 'react-spring/native';

import { ElementMeasure } from './ElementMeasure';
import { useRippleAnimation } from './useRippleAnimation';

export type RippleColorGetter<ComponentProps> = (
  props: ComponentProps,
) => string;

export interface AnimatedRippleViewProps<ComponentProps>
  extends BuiltInSimpleComponentProps<ComponentProps>,
    ViewProps {
  readonly children?: React.ReactNode;
  readonly getRippleColor: RippleColorGetter<ComponentProps>;
}

const AnimatedView = animated(View);

export const AnimatedRippleView = forwardRef(
  <
    ComponentProps extends SurfacePropsBase<ComponentProps, Theme> &
      InteractionStateProps,
    Theme
  >(
    props: AnimatedRippleViewProps<ComponentProps>,
    ref: Ref<View>,
  ): JSX.Element => {
    const { children, complexComponentProps, ...otherProps } = props;
    const { interactionState } = complexComponentProps;

    let viewRef: Ref<View> = useRef(null);
    if (ref) viewRef = ref;
    const [elementMeasure, setElementMeasure] = useState<ElementMeasure>({
      height: 0,
      pageX: 0,
      pageY: 0,
      width: 0,
      x: 0,
      y: 0,
    });

    /*
     * In my tests if we don't use a timeout, i.e., we just use
     * a useEffect(), measure() returns zero for all values.
     * When testing with 10 miliseconds I could also see
     * zero returned a few times. 50 miliseconds worked for all tests.
     */
    useTimeout(() => {
      if (
        viewRef === undefined ||
        viewRef === null ||
        (viewRef as MutableRefObject<View>).current === undefined ||
        (viewRef as MutableRefObject<View>).current === null
      ) {
        return;
      }
      (viewRef as MutableRefObject<View>).current.measure(
        (x, y, width, height, pageX, pageY) =>
          setElementMeasure({ height, pageX, pageY, width, x, y }),
      );
    }, 50);

    const { rippleContainerStyle, rippleMotionStyle } = useRippleAnimation({
      color: props.getRippleColor(props.complexComponentProps),
      containerStyle: props.style,
      elementMeasure,
      interactionState,
    });

    /*
     * It seems that there's some type definition bug
     * in react-spring causing the error below. See this link:
     * github.com/react-spring/react-spring/issues/642#issuecomment-488072147
     * Remove ts-ignore when that bug is fixed.
     */
    // @ts-ignore error TS2589: Type instantiation
    // is excessively deep and possibly infinite.
    const renderedAnimatedView = (
      // @ts-ignore error TS2589: Type instantiation
      <AnimatedView key="rippleAnimation" style={rippleMotionStyle} />
    );

    return (
      <View key="rippleSurface" {...otherProps} ref={viewRef}>
        <View key="rippleContainer" style={rippleContainerStyle}>
          {renderedAnimatedView}
        </View>
        {children}
      </View>
    );
  },
);
