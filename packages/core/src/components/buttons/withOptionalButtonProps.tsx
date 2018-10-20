import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { ColorTheme, ThemeContext } from '../../theming';
import { Size } from '../Size';
import { ButtonProps, OptionalButtonProps } from './ButtonProps';
import { ButtonVariant } from './ButtonVariant';

export const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
): React.ComponentType<OptionalButtonProps> =>
  class ButtonWithOptionalProps extends React.Component<OptionalButtonProps> {
    public render() {
      return (
        // prettier-ignore
        <ThemeContext.Consumer>
          {(theme) => {
            const props: ButtonProps = {
              colorTheme: ColorTheme.PRIMARY_NORMAL,
              interactivityState: {
                type: InteractivityType.ENABLED,
              },
              size: Size.REGULAR,
              theme,
              variant: ButtonVariant.DEFAULT,
              ...this.props,
            };

            return <WrappedComponent {...props} />;
          }}
        </ThemeContext.Consumer>
      );
    }
  };
