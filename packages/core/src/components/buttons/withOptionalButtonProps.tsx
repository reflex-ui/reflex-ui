import * as React from 'react';

import { InteractivityType } from '../../interactivity';
import { ColorTheme, ThemeContext } from '../../theming';
import { Size } from '../Size';
import { ButtonVariant } from './ButtonVariant';
import {
  OptionalSpecialButtonProps,
  SpecialButtonProps,
} from './SpecialButtonProps';

export const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<SpecialButtonProps>,
): React.ComponentType<OptionalSpecialButtonProps> =>
  class ButtonWithOptionalProps extends React.Component<
    OptionalSpecialButtonProps
  > {
    public render() {
      return (
        // prettier-ignore
        <ThemeContext.Consumer>
          {(theme) => {
            const props: SpecialButtonProps = {
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
