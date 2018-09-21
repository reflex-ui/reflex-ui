import * as React from 'react';
import { GestureResponderEvent } from 'react-native';

import { isWeb } from '../utils';
import { InteractivityEvent } from './InteractivityEvent';
import { InteractivityProps } from './InteractivityProps';
import { InteractivityState } from './InteractivityState';
import { InteractivityType } from './InteractivityType';

interface State {
  interactivityEvent?: InteractivityEvent;
  interactivityState: InteractivityState;
  isFocusing: boolean;
  isHovering: boolean;
  isPressing: boolean;
}

export const withInteractivityState = <P extends InteractivityProps>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  class ComponentWithInteractivityState extends React.Component<P, State> {
    public readonly state: State = {
      interactivityEvent: undefined,
      interactivityState: { type: InteractivityType.DISABLED },
      isFocusing: false,
      isHovering: false,
      isPressing: false,
    };

    public render(): JSX.Element {
      // tslint:disable-next-line:no-console
      console.log(
        'RaisedComponent.getDerivedStateFromProps() - getInteractivityState() ',
        this.getInteractivityState(),
      );
      const interactivityProps: InteractivityProps = {
        interactivityState: this.getInteractivityState(),
        onBlur: isWeb ? this.onBlur : undefined,
        onFocus: isWeb ? this.onFocus : undefined,
        onMouseEnter: isWeb ? this.onMouseEnter : undefined,
        onMouseLeave: isWeb ? this.onMouseLeave : undefined,
        onPressIn: this.onPressIn,
        onPressOut: this.onPressOut,
      };

      return <WrappedComponent {...this.props} {...interactivityProps} />;
    }

    private getInteractivityState = (): InteractivityState => {
      if (this.props.disabled) {
        return {
          event: this.state.interactivityEvent,
          type: InteractivityType.DISABLED,
        };
      }
      if (this.state.isPressing) {
        return {
          event: this.state.interactivityEvent,
          type: InteractivityType.PRESSED,
        };
      }
      if (this.state.isFocusing) {
        return {
          event: this.state.interactivityEvent,
          type: InteractivityType.FOCUSED,
        };
      }
      if (this.state.isHovering) {
        return {
          event: this.state.interactivityEvent,
          type: InteractivityType.HOVERED,
        };
      }
      return {
        event: this.state.interactivityEvent,
        type: InteractivityType.ENABLED,
      };
    };

    private onBlur = (event: React.FocusEvent): void => {
      if (!this.state.isFocusing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onBlur');
      this.setState({ interactivityEvent: undefined, isFocusing: false });
      if (this.props.onBlur) this.props.onBlur(event);
    };

    private onFocus = (event: React.FocusEvent): void => {
      if (this.state.isFocusing || this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onFocus');
      this.setState({ interactivityEvent: event, isFocusing: true });
      if (this.props.onFocus) this.props.onFocus(event);
    };

    private onMouseEnter = (event: React.MouseEvent): void => {
      if (this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onMouseEnter');
      this.setState({ interactivityEvent: event, isHovering: true });
      if (this.props.onMouseEnter) this.props.onMouseEnter(event);
    };

    private onMouseLeave = (event: React.MouseEvent): void => {
      if (!this.state.isHovering) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onMouseLeave');
      this.setState({ interactivityEvent: undefined, isHovering: false });
      if (this.props.onMouseLeave) this.props.onMouseLeave(event);
    };

    private onPressIn = (event: GestureResponderEvent): void => {
      if (this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onPressIn');
      this.setState({ interactivityEvent: event, isPressing: true });
      if (this.props.onPressIn) this.props.onPressIn(event);
    };

    private onPressOut = (event: GestureResponderEvent): void => {
      if (!this.state.isPressing) return;
      // tslint:disable-next-line:no-console
      console.log('WithInteractivityState().onPressOut');
      this.setState({ interactivityEvent: undefined, isPressing: false });
      if (this.props.onPressOut) this.props.onPressOut(event);
    };
  };
