import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { Size } from '../../Size';
import { ComponentsThemeContext, PaletteThemeContext } from '../../theming';
import { ButtonProps, OptionalButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColorTheme } from './getButtonVariantColorTheme';

// prettier-ignore
export const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
): React.ComponentType<OptionalButtonProps> => props => (
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
            colorTheme: getButtonVariantColorTheme(variant),
            componentsTheme,
            interactivityState: {
              type: InteractivityType.ENABLED,
            },
            margin,
            paletteTheme,
            size: Size.M,
            variant,
            ...props,
          };

          return <WrappedComponent {...propsWithDefaults} />;
        }}
      </ComponentsThemeContext.Consumer>
    )}
  </PaletteThemeContext.Consumer>
);
