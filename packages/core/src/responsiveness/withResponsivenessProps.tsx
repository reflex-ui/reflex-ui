/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

import { reflexComponent } from '../components/reflexComponent';
import { ResponsivenessProps } from './ResponsivenessProps';

interface State {
  readonly layoutRectangle?: LayoutRectangle;
}

export const withResponsivenessProps = <P extends ResponsivenessProps>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P> =>
  reflexComponent<P>({ wrapped: WrappedComponent })(
    class WithResponsivenessProps extends React.Component<P, State> {
      public readonly state: State = {
        layoutRectangle: undefined,
      };

      public render(): JSX.Element {
        const responsivenessProps: ResponsivenessProps = {
          layoutRectangle: this.state.layoutRectangle,
          onLayout: this.onLayout,
        };

        return <WrappedComponent {...this.props} {...responsivenessProps} />;
      }

      private onLayout = (event: LayoutChangeEvent): void => {
        const layoutRectangle: LayoutRectangle | undefined =
          event.nativeEvent && event.nativeEvent.layout
            ? event.nativeEvent.layout
            : undefined;
        this.setState({ layoutRectangle });
        if (this.props.onLayout) this.props.onLayout(event);
      };
    },
  );
