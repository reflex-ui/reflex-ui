/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

import { ResponsivenessProps } from './ResponsivenessProps';

export const useOnLayout = <Props extends ResponsivenessProps>(
  props: Props,
): ResponsivenessProps => {
  const [layoutRectangle, setLayoutRectangle] = useState<
    LayoutRectangle | undefined
    // tslint:disable-next-line:ter-func-call-spacing
  >(undefined);

  if (!props.enableOnLayout) return {};

  const onLayout = (event: LayoutChangeEvent): void => {
    if (event.nativeEvent) setLayoutRectangle(event.nativeEvent.layout);
    if (props.onLayout) props.onLayout(event);
  };

  return {
    layoutRectangle,
    onLayout,
  };
};
