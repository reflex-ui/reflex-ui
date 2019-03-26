/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { ComponentThemeProps } from './ComponentThemeProps';
import { SimpleComponentTheme } from './SimpleComponentTheme';
import { StyleProps } from './StyleProps';

export const handleSimpleComponentThemeProps = <
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
  const propsFromTheme = props.theme.getProps && props.theme.getProps(props);
  if (
    propsFromTheme === undefined ||
    propsFromTheme === null ||
    isEmpty(propsFromTheme)
  ) {
    return props;
  }
  return merge({}, propsFromTheme, props);
};
