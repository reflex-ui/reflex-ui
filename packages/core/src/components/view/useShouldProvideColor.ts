/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { ColorContext } from '../../palette/ColorContext';
import { RfxViewPropsBaseOptional } from './RfxViewProps';

export const useShouldProvideColor = (
  props: RfxViewPropsBaseOptional,
): boolean => {
  const colorFromCtx = useContext(ColorContext);
  const { colorArrangement } = props;
  return (
    colorArrangement !== undefined &&
    colorArrangement !== null &&
    colorArrangement !== colorFromCtx
  );
};
