/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { usePaletteColor } from '../../color/PaletteColor';
import { Size } from '../../sizing/Size';
// tslint:disable-next-line:max-line-length
import { useDefaultTouchableProps } from '../touchable/useDefaultTouchableProps';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColor } from './getButtonVariantColor';

export const useDefaultButtonProps = (
  props: ButtonPropsOptional,
  theme: ButtonTheme,
): ButtonProps => {
  const { palette } = usePalette();
  const paletteColorCtxValue = usePaletteColor();
  let paletteColor = paletteColorCtxValue && paletteColorCtxValue.paletteColor;

  const variant: ButtonVariant = props.variant || ButtonVariant.Default;

  paletteColor =
    props.paletteColor ||
    paletteColor ||
    getButtonVariantColor(variant, palette);

  const contained =
    variant === ButtonVariant.Default ||
    variant === ButtonVariant.Icon ||
    variant === ButtonVariant.Outlined ||
    variant === ButtonVariant.OutlinedShaped
      ? false
      : true;

  return {
    ...useDefaultTouchableProps(props, theme),
    contained,
    paletteColor,
    size: props.size || Size.M,
    variant,
  };
};
