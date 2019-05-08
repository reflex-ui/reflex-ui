/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

import { DimensionsInfo } from './DimensionsInfo';

export const useDimensions = (): DimensionsInfo => {
  const onDimensionsChange = useCallback(
    ({ screen, window }: { screen: ScaledSize; window: ScaledSize }) => {
      setDimensions({ screen, window });
    },
    [],
  );

  useEffect(() => {
    Dimensions.addEventListener('change', onDimensionsChange);
    return () => {
      Dimensions.removeEventListener('change', onDimensionsChange);
    };
  });

  const [dimensions, setDimensions] = useState<DimensionsInfo>({
    screen: Dimensions.get('screen'),
    window: Dimensions.get('window'),
  });

  return dimensions;
};
