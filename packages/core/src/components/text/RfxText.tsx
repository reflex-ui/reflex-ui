/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { TextProps, TextStyle } from 'react-native';

import { resolveChildProps } from '../children/resolveChildProps';
import { reflexComponent } from '../reflexComponent';
import { DefaultTextChild } from './DefaultTextChild';
import { RfxTextProps } from './RfxTextProps';

export const extractTextPropsFromRfxTextProps = (
  props: RfxTextProps,
): TextProps => {
  const {
    children,
    colorTheme,
    getPatchTheme,
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
  const patchTheme = props.getPatchTheme && props.getPatchTheme(props);

  let newProps = { ...props, children };
  if (props.theme.getProps || (patchTheme && patchTheme.getProps)) {
    newProps = {
      ...newProps,
      ...((props.theme.getProps && props.theme.getProps(props)) || {}),
      ...((patchTheme && patchTheme.getProps && patchTheme.getProps(props)) ||
        {}),
    };
  }

  const Text =
    (patchTheme && patchTheme.text && patchTheme.text.component) ||
    (newProps.theme.text && newProps.theme.text.component) ||
    DefaultTextChild;

  const textProps = resolveChildProps<RfxTextProps, TextProps, TextStyle>({
    componentProps: newProps,
    patchTheme: patchTheme && patchTheme.text,
    theme: newProps.theme.text,
  });

  const userProps = extractTextPropsFromRfxTextProps(newProps);

  if (userProps.style) {
    throw new Error(
      [
        "Rfx: It's not possible to pass style prop directly.",
        'You have to pass it as part of theme object.',
      ].join(' '),
    );
  }

  const mergedTextProps = merge({}, textProps, userProps);

  return (
    <Text componentProps={newProps} {...mergedTextProps}>
      {children}
    </Text>
  );
};

export const RfxText = reflexComponent<RfxTextProps>({
  name: 'Text',
})((props: RfxTextProps) => {
  const { children, ...propsButChildren } = props;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    return transformRfxTextStringChildIntoComponent(children, propsButChildren);
  }

  if (children === undefined || children === null) return null;
  if ('type' in children) return children;

  return null;
});
