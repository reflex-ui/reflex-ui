/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps, TextStyle } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { TypographyProps } from './TypographyProps';

export const extractTextPropsFromTypographyProps = (
  props: TypographyProps,
): TextProps => {
  const {
    children,
    colorTheme,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginStart,
    marginTop,
    marginVertical,
    paletteTheme,
    theme,
    ...textProps
  } = props;

  return textProps;
};

export const transformTypographyStringChildrenIntoComponent = (
  children: React.ReactNode,
  props: TypographyProps,
): JSX.Element => {
  const Text = props.theme.component;
  const userProps = extractTextPropsFromTypographyProps(props);

  const textProps = getSubProps<TypographyProps, TextProps, TextStyle>({
    componentProps: props,
    theme: props.theme,
    userProps,
  });

  return (
    <Text componentProps={props} {...textProps}>
      {children}
    </Text>
  );
};

export const SimpleText = reflexComponent<TypographyProps>({
  name: 'SimpleText',
})((props: TypographyProps) => {
  const { children } = props;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    return transformTypographyStringChildrenIntoComponent(children, props);
  }

  if (children === undefined || children === null) return null;
  if ('type' in children) return children;

  return null;
});
