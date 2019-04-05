/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

import { processComponent } from '../components/processComponent';
import { DimensionsContext } from './DimensionsContext';
import { DimensionsInfo } from './DimensionsInfo';
import { DimensionsProps } from './DimensionsProps';
import { DimensionsProviderProps } from './DimensionsProviderProps';

let DimensionsProvider: React.ComponentType<DimensionsProviderProps> = (
  props: DimensionsProviderProps & { children?: React.ReactNode },
) => {
  const dimensionsChangedHandler = ({
    screen,
    window,
  }: {
    screen: ScaledSize;
    window: ScaledSize;
  }) => {
    setDimensions({ screen, window });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', dimensionsChangedHandler);
    return () => {
      Dimensions.removeEventListener('change', dimensionsChangedHandler);
    };
  });

  const [dimensions, setDimensions] = useState<DimensionsInfo>({
    screen: Dimensions.get('screen'),
    window: Dimensions.get('window'),
  });

  const dimensionsProps: DimensionsProps = {
    breakpoints: props.breakpoints,
    dimensions,
  };

  return (
    <DimensionsContext.Provider value={dimensionsProps}>
      {props.children}
    </DimensionsContext.Provider>
  );
};

DimensionsProvider = processComponent<DimensionsProviderProps>(
  DimensionsProvider,
  {
    name: 'DimensionsProvider',
  },
);

export { DimensionsProvider };
