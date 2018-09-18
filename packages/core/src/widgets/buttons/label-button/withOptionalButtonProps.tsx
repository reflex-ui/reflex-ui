import * as React from 'react';

import { InteractivityState } from '../../../interactivity';
import { ColorVariant, ThemeContext } from '../../../styles';
import { Size } from '../../Size';
import {
  ButtonProps,
  ButtonVariant,
  OptionalButtonProps,
} from './SimpleButton';

export const withOptionalButtonProps = (
  WrappedComponent: React.ComponentType<ButtonProps>,
) =>
  // tslint:disable-next-line
  class ButtonWithOptionalProps extends React.Component<OptionalButtonProps> {
    public render() {
      return (
        // prettier-ignore
        <ThemeContext.Consumer>
        {(theme) => {
          const props: ButtonProps = {
            colorVariant: ColorVariant.PRIMARY_NORMAL,
            fullWidth: false,
            interactivityState: InteractivityState.ENABLED,
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
