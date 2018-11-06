import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { Size } from '../../Size';
import { ComponentsThemeContext, PaletteThemeContext } from '../../theming';
import { ButtonProps, OptionalButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColorTheme } from './getButtonVariantColorTheme';

export const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
): React.ComponentType<OptionalButtonProps> =>
  class ButtonWithOptionalProps extends React.Component<OptionalButtonProps> {
    public render() {
      return (
        // prettier-ignore
        <PaletteThemeContext.Consumer>
          {paletteTheme => (
            <ComponentsThemeContext.Consumer>
              {(componentsTheme) => {
                const variant: ButtonVariant =
                  this.props.variant || ButtonVariant.DEFAULT;

                const margin: Size =
                  variant === ButtonVariant.FAB ||
                  variant === ButtonVariant.XFAB ||
                  variant === ButtonVariant.ICON
                    ? Size.NONE
                    : Size.M;

                const props: ButtonProps = {
                  colorTheme: getButtonVariantColorTheme(variant),
                  componentsTheme,
                  interactivityState: {
                    type: InteractivityType.ENABLED,
                  },
                  margin,
                  paletteTheme,
                  size: Size.M,
                  variant,
                  ...this.props,
                };

                return <WrappedComponent {...props} />;
              }}
            </ComponentsThemeContext.Consumer>
        )}
        </PaletteThemeContext.Consumer>
      );
    }
  };
