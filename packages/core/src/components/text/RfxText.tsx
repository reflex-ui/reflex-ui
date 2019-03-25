/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Text as RNText, TextProps } from 'react-native';

import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { validateNoStyleProps } from '../validateNoStyleProps';
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

export const renderRfxTextText = (props: RfxTextProps): JSX.Element => {
  const { children, theme } = props;

  const Text = theme.component || RNText;
  const textProps = {
    ...extractTextPropsFromRfxTextProps(props),
    style: getStyleFromTheme(props, theme),
  };

  if (Text === RNText) {
    return <Text {...textProps}>{children}</Text>;
  }

  return (
    <Text complexComponentProps={props} {...textProps}>
      {children}
    </Text>
  );
};

export const renderRfxText = (
  props: RfxTextProps,
): React.ReactElement | null => {
  const { children } = props;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    validateNoStyleProps(props);
    let newProps = handlePatchThemeProps(props);
    newProps = handleChildrenProps(props);
    return renderRfxTextText(newProps);
  }

  if (children === undefined || children === null) return null;
  if ('type' in children) return children;

  return null;
};
