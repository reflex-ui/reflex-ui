/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps, TextStyle } from 'react-native';

import { resolveChildProps } from '../children';
import { reflexComponent } from '../reflexComponent';
import { DefaultTextChild } from './DefaultTextChild';
import { RfxTextProps } from './RfxTextProps';

export const extractTextPropsFromRfxTextProps = (
  props: RfxTextProps,
): TextProps => {
  const {
    children,
    colorTheme,
    interactionState,
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

export const transformRfxTextStringChildIntoComponent = (
  children: React.ReactNode,
  props: RfxTextProps,
): JSX.Element => {
  const Text = props.theme.component || DefaultTextChild;
  const userProps = extractTextPropsFromRfxTextProps(props);

  const textProps = resolveChildProps<RfxTextProps, TextProps, TextStyle>({
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

export const RfxText = reflexComponent<RfxTextProps>({
  name: 'Text',
})((props: RfxTextProps) => {
  const { children } = props;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    return transformRfxTextStringChildIntoComponent(children, props);
  }

  if (children === undefined || children === null) return null;
  if ('type' in children) return children;

  return null;
});
