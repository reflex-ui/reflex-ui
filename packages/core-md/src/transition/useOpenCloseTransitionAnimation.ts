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
import { useCallback } from 'react';
import { useSpring, UseSpringProps } from 'react-spring/native';

export interface OpenCloseTransitionAnimationInput<ComponentProps>
  extends PrimitiveComponentProps<ComponentProps> {
  readonly closeAnimationProps?: UseSpringProps;
  readonly openAnimationProps?: UseSpringProps;
}

export const useOpenCloseTransitionAnimation = <
  ComponentProps extends SurfacePropsBase<ComponentProps, Theme>,
  Theme
>(
  input: OpenCloseTransitionAnimationInput<ComponentProps>,
) => {
  const { complexComponentProps } = input;
  const {
    componentDidClose,
    componentDidOpen,
    isClosing,
    isOpen,
    isOpening,
  } = complexComponentProps;

  const onOpenRest = useCallback(
    (restValues: Readonly<{ [x: string]: unknown }>) => {
      if (!isOpening) return;
      console.log(
        'useOpenCloseTransitionAnimation().onOpenRest() - input.openAnimationProps: ',
        input.openAnimationProps,
      );
      if (input.openAnimationProps && input.openAnimationProps.onRest) {
        input.openAnimationProps.onRest(restValues);
      }
      if (componentDidOpen !== undefined) {
        componentDidOpen(complexComponentProps);
      }
    },
    [complexComponentProps],
  );

  const onCloseRest = useCallback(
    (restValues: Readonly<{ [x: string]: unknown }>) => {
      if (!isClosing) return;
      if (input.closeAnimationProps && input.closeAnimationProps.onRest) {
        input.closeAnimationProps.onRest(restValues);
      }
      if (componentDidClose !== undefined) {
        componentDidClose(complexComponentProps);
      }
    },
    [complexComponentProps],
  );

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

  let openAnimationProps = input.openAnimationProps;
  if (openAnimationProps === undefined) {
    openAnimationProps = emptyAnimationProps;
  } else {
    openAnimationProps = {
      ...openAnimationProps,
      onRest: onOpenRest,
    };
  }

  let closeAnimationProps = input.closeAnimationProps;
  if (closeAnimationProps === undefined) {
    closeAnimationProps = emptyAnimationProps;
  } else {
    closeAnimationProps = {
      ...closeAnimationProps,
      onRest: onCloseRest,
    };
  }

  const transitionProps = isOpen ? openAnimationProps : closeAnimationProps;
  const animationProps = useSpring(transitionProps);

  return moveTransformPropsToTransformArray(animationProps);
};
