import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonState } from './themes';

interface IProps {
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  state?: ButtonState;
}

interface IState {
  isHovering: boolean;
  isPressing: boolean;
}

export type IWithMouseEvents = <P extends IProps>(
  WrappedComponent: React.ComponentType<P>,
) => React.ComponentType<P>;

export const withMouseEvents: IWithMouseEvents = <P extends IProps>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class MouseEventsToProps extends React.Component<P, IState> {
    public readonly state: IState = { isHovering: false, isPressing: false };

    public render(): JSX.Element {
      return (
        <WrappedComponent
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          state={this.getButtonState()}
          {...this.props}
        />
      );
    }

    private getButtonState = (): ButtonState => {
      if (this.props.disabled) return ButtonState.DISABLED;
      if (this.state.isPressing) return ButtonState.PRESSED;
      if (this.state.isHovering) return ButtonState.HOVERED;
      return ButtonState.REGULAR;
    };

    private onMouseEnter = (): void => {
      if (this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onMouseEnter');
      this.setState({ isHovering: true });
    };

    private onMouseLeave = (): void => {
      if (!this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onMouseLeave');
      this.setState({ isHovering: false });
    };

    private onPressIn = (): void => {
      if (this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onPressIn');
      this.setState({ isPressing: true });
    };

    private onPressOut = (): void => {
      if (!this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('MouseEventsToProps().onPressOut');
      this.setState({ isPressing: false });
    };
  };
