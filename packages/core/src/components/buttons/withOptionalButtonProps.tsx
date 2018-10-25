import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { ThemeContext } from '../../theming';
import { Size } from '../Size';
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
        <ThemeContext.Consumer>
          {(theme) => {
            const variant: ButtonVariant = this.props.variant
            || ButtonVariant.DEFAULT;
            const props: ButtonProps = {
              colorTheme: getButtonVariantColorTheme(variant),
              interactivityState: {
                type: InteractivityType.ENABLED,
              },
              size: Size.REGULAR,
              theme,
              variant,
              ...this.props,
            };

            return <WrappedComponent {...props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
