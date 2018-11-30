/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { PaletteThemeContext } from '../../palette/PaletteThemeContext';
import { Size } from '../../Size';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { reflexComponent } from '../reflexComponent';
import { ButtonProps, OptionalButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColorTheme } from './getButtonVariantColorTheme';

// prettier-ignore
export const withDefaultButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
): React.ComponentType<OptionalButtonProps> => reflexComponent<
  OptionalButtonProps
>({ name: 'WithDefaultButtonProps', wrapped: WrappedComponent })(props => (
  <PaletteThemeContext.Consumer>
    {paletteTheme => (
      <ComponentsThemeContext.Consumer>
        {(componentsTheme) => {
          const variant: ButtonVariant =
            props.variant || ButtonVariant.DEFAULT;

          const margin: Size =
            variant === ButtonVariant.FAB ||
            variant === ButtonVariant.XFAB ||
            variant === ButtonVariant.ICON
              ? Size.NONE
              : Size.M;

          const propsWithDefaults: ButtonProps = {
            allVariantsTheme: componentsTheme.button.allVariants,
            colorTheme: getButtonVariantColorTheme(variant),
            interactivityState: {
              type: InteractivityType.ENABLED,
            },
            margin,
            paletteTheme,
            size: Size.M,
            theme: componentsTheme.button[variant],
            variant,
            ...props,
          };

          return <WrappedComponent {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
));
