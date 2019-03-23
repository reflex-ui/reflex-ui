/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

// tslint:disable-next-line:max-line-length
import { MissingComponentThemeError } from '../../errors/MissingComponentThemeError';
import { InteractionType } from '../../interaction';
import { ColorThemeContext } from '../../palette/ColorThemeContext';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../sizing/Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColorTheme } from './getButtonVariantColorTheme';

export const useDefaultButtonProps = (
  props: ButtonPropsOptional,
): ButtonProps => {
  const colorTheme = useContext(ColorThemeContext);
  const componentsTheme = useContext(ComponentsThemeContext);
  const paletteTheme = useContext(PaletteThemeContext);

  const variant: ButtonVariant = props.variant || ButtonVariant.Default;

  let theme = props.theme;
  if (!theme) {
    if (!componentsTheme.button) {
      throw new MissingComponentThemeError('<Button>');
    }
    theme = componentsTheme.button[variant];
  }

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
    colorTheme: colorTheme || getButtonVariantColorTheme(variant),
    contained,
    interactionState: {
      type: InteractionType.Enabled,
    },
    /*
     * marginHorizontal and marginVertical are more specific
     * than margin, so we check it here to avoid overriding
     * users' margin when provided.
     */
    // marginHorizontal: props.margin ? undefined : marginHorizontal,
    // marginVertical: props.margin ? undefined : marginVertical,
    ...((props.margin && {}) || { marginHorizontal, marginVertical }),
    /**/
    paletteTheme,
    size: Size.M,
    theme,
    variant,
    ...props,
  };
};