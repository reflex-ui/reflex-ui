/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { ComponentThemeProps } from './ComponentThemeProps';
import { registerStyle } from './registerStyle';
import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const handleSimpleComponentThemeStyle = <
  ComponentProps extends ComponentThemeProps<ComponentProps, ComponentTheme>,
  PrimitiveProps extends StyleProps<PrimitiveStyle>,
  PrimitiveStyle extends ViewStyle | TextStyle | ImageStyle,
  ComponentTheme extends SimpleComponentTheme<
    ComponentProps,
    PrimitiveProps,
    PrimitiveStyle
  >
>(
  props: ComponentProps,
) => {
  const style = props.theme.getStyle && props.theme.getStyle(props);
  if (style === undefined || style === null || isEmpty(style)) {
    return props;
  }

  if (typeof style !== 'object') {
    throw new Error(
      [
        'Rfx: invalid object returned from theme.getStyle().',
        `It must return an object, but returned: ${typeof style}`,
      ].join(' '),
    );
  }

  return {
    ...props,
    style: registerStyle<PrimitiveStyle>(style),
  };
};
