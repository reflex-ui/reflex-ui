/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const getPropsFromTheme = <
  ComponentProps,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle
>(
  props: ComponentProps,
  theme?: SimpleComponentTheme<ComponentProps, PrimitiveProps, PrimitiveStyle>,
): PrimitiveProps | undefined => {
  if (
    theme === undefined ||
    theme === null ||
    theme.getProps === undefined ||
    theme.getProps === null
  ) {
    return undefined;
  }

  const themeProps = theme.getProps(props);

  if (themeProps === undefined || themeProps === null || isEmpty(themeProps)) {
    return undefined;
  }

  if (typeof themeProps !== 'object') {
    throw new Error(
      [
        'Rfx: invalid object returned from theme.getProps().',
        `It must return an object, but returned: ${typeof themeProps}`,
      ].join(' '),
    );
  }

  if (themeProps.style) {
    throw new Error(
      [
        '"style" property is not allowed to be passed as part of',
        'getProps() in themes. Please use getStyle() instead.',
      ].join(' '),
    );
  }

  return themeProps;
};
