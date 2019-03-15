/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';
import * as React from 'react';
import { TextProps } from 'react-native';

import { extractPropsFromTheme } from '../children/extractPropsFromTheme';
import { mergeThemes } from '../children/mergeThemes';
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
  let newProps = props;
  let mergedTheme = props.theme;

  if (props.getPatchTheme || props.theme.getProps) {
    mergedTheme = mergeThemes(
      props.theme,
      props.getPatchTheme && props.getPatchTheme(props),
    );

    newProps = {
      ...newProps,
      ...((mergedTheme.getProps && mergedTheme.getProps(props)) || {}),
      theme: mergedTheme,
    };
  }

  const Text =
    (mergedTheme.text && mergedTheme.text.component) || DefaultTextChild;

  const textPropsFromTheme = extractPropsFromTheme(newProps, mergedTheme.text);
  const textProps = extractTextPropsFromRfxTextProps(newProps);

  if (textProps.style) {
    throw new Error(
      [
        "Rfx: It's not possible to pass style prop directly.",
        'You have to pass it as part of theme object.',
      ].join(' '),
    );
  }

  const mergedTextProps = merge({}, textPropsFromTheme, textProps);

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
