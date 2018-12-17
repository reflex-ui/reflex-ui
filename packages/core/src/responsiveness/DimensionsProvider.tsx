/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Dimensions, ScaledSize } from 'react-native';

import { reflexComponent } from '../components/reflexComponent';
import { DimensionsContext } from './DimensionsContext';
import { DimensionsProps } from './DimensionsProps';
import { DimensionsProviderProps } from './DimensionsProviderProps';

export const DimensionsProvider = reflexComponent<DimensionsProviderProps>({
  name: 'DimensionsProvider',
})(
  class DimensionsProviderClass extends React.Component<
    DimensionsProviderProps,
    DimensionsProps
  > {
    public readonly state: DimensionsProps = {
      breakpoints: this.props.breakpoints,
      dimensions: {
        screen: Dimensions.get('screen'),
        window: Dimensions.get('window'),
      },
    };

    public componentDidMount() {
      Dimensions.addEventListener('change', this.dimensionsChangedHandler);
    }

    public componentWillUnmount() {
      Dimensions.removeEventListener('change', this.dimensionsChangedHandler);
    }

    public render(): JSX.Element {
      return (
        <DimensionsContext.Provider value={this.state}>
          {this.props.children}
        </DimensionsContext.Provider>
      );
    }

    private dimensionsChangedHandler = ({
      screen,
      window,
    }: {
      screen: ScaledSize;
      window: ScaledSize;
    }) => {
      this.setState({ dimensions: { screen, window } });
    };
  },
);
