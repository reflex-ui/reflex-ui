/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteContext } from '../../color/PaletteContext';
import {
  SurfacePropsBase,
  SurfacePropsBaseOptional,
} from '../surface/SurfaceProps';
// tslint:disable-next-line:max-line-length
import { useDefaultSurfacePropsBase } from '../surface/useDefaultSurfacePropsBase';

export const useDefaultScreenPropsBase = (
  props: SurfacePropsBaseOptional,
): SurfacePropsBase => {
  const palette = useContext(PaletteContext);
  const paletteColor = props.paletteColor || palette.screen;

  return {
    ...useDefaultSurfacePropsBase(props),
    paletteColor,
  };
};
