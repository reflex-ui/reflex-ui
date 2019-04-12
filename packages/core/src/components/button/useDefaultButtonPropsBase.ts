/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { PaletteColorContext } from '../../color/PaletteColorContext';
import { PaletteContext } from '../../color/PaletteContext';
import { Size } from '../../sizing/Size';
// tslint:disable-next-line:max-line-length
import { useDefaultTouchableSurfacePropsBase } from '../touchable-surface/useDefaultTouchableSurfacePropsBase';
import { ButtonPropsBase, ButtonPropsBaseOptional } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColor } from './getButtonVariantColor';

export const useDefaultButtonPropsBase = (
  props: ButtonPropsBaseOptional,
): ButtonPropsBase => {
  const paletteColorFromCtx = useContext(PaletteColorContext);
  const palette = useContext(PaletteContext);

  const variant: ButtonVariant = props.variant || ButtonVariant.Default;

  const paletteColor =
    props.paletteColor ||
    paletteColorFromCtx ||
    getButtonVariantColor(variant, palette);

  const contained =
    variant === ButtonVariant.Default ||
    variant === ButtonVariant.Icon ||
    variant === ButtonVariant.Outlined ||
    variant === ButtonVariant.OutlinedShaped
      ? false
      : true;

  const marginHorizontal: Size | number =
    variant === ButtonVariant.Fab ||
    variant === ButtonVariant.XFab ||
    variant === ButtonVariant.Icon
      ? 0
      : Size.M;

  const marginVertical: Size | number =
    variant === ButtonVariant.Fab ||
    variant === ButtonVariant.XFab ||
    variant === ButtonVariant.Icon
      ? 0
      : Size.S;

  return {
    ...useDefaultTouchableSurfacePropsBase(props),
    contained,
    /*
     * marginHorizontal and marginVertical are more specific
     * than margin, so we check it here to avoid overriding
     * users' margin when provided.
     */
    // marginHorizontal: props.margin ? undefined : marginHorizontal,
    // marginVertical: props.margin ? undefined : marginVertical,
    ...((props.margin && {}) || { marginHorizontal, marginVertical }),
    /**/
    paletteColor,
    size: props.size || Size.M,
    variant,
  };
};
