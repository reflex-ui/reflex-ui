import * as React from 'react';

import { InteractiveComponent } from './InteractiveComponent';
import { InteractivityState } from './InteractivityState';
import { WithInteractivityStateFactory } from './WithInteractivityStateFactory';

interface State {
  isHovering: boolean;
  isPressing: boolean;
}

export const createWithInteractivityState: WithInteractivityStateFactory = <
  P extends InteractiveComponent
>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithInteractivityState extends React.Component<P, State> {
    public readonly state: State = { isHovering: false, isPressing: false };

    public render(): JSX.Element {
      return (
        <WrappedComponent
          interactivityState={this.getInteractivityState()}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          {...this.props}
        />
      );
    }

    private getInteractivityState = (): InteractivityState => {
      if (this.props.disabled) return InteractivityState.DISABLED;
      if (this.state.isPressing) return InteractivityState.PRESSED;
      if (this.state.isHovering) return InteractivityState.HOVERED;
      return InteractivityState.REGULAR;
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
