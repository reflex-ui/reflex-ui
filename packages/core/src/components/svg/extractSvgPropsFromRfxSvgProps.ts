/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from 'react-native-svg';

import { RfxSvgProps } from './RfxSvgProps';

export const extractSvgPropsFromRfxSvgProps = (
  props: RfxSvgProps,
): SvgProps => {
  const {
    children,
    colorTheme,
    enableOnLayout,
    getPatchTheme,
    interactionState,
    invertColor,
    layoutRectangle,
    onLayout,
    paletteTheme,
    size,
    theme,
    ...svgProps
  } = props;

  return svgProps;
};
