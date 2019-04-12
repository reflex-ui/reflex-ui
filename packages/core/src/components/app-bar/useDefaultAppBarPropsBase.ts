/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteContext } from '../../color/PaletteContext';
// tslint:disable-next-line:max-line-length
import { useDefaultSurfacePropsBase } from '../surface/useDefaultSurfacePropsBase';
import { AppBarPropsBase, AppBarPropsBaseOptional } from './AppBarProps';
import { AppBarVariant } from './AppBarVariant';

export const useDefaultAppBarPropsBase = (
  props: AppBarPropsBaseOptional,
): AppBarPropsBase => {
  const palette = useContext(PaletteContext);
  const variant: AppBarVariant = props.variant || AppBarVariant.Default;
  const paletteColor = props.paletteColor || palette.primary;

  return {
    ...useDefaultSurfacePropsBase(props),
    paletteColor,
    variant,
  };
};
