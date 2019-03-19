/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { TextProps } from 'react-native';

import { propsPipe } from '../../utils/propsPipe';
import { getStyleFromTheme } from '../getStyleFromTheme';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { reflexComponent } from '../reflexComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { DefaultText } from './DefaultText';
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
  props: RfxTextProps,
): JSX.Element => {
  validateNoStyleProps(props);
  const newProps = propsPipe<RfxTextProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
  ])(props);
  const { theme } = newProps;

  const Text = theme.component || DefaultText;
  const textProps = {
    ...extractTextPropsFromRfxTextProps(newProps),
    style: getStyleFromTheme(newProps, theme),
  };

  return (
    <Text complexComponentProps={newProps} {...textProps}>
      {newProps.children}
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
    return transformRfxTextStringChildIntoComponent(props);
  }

  if (children === undefined || children === null) return null;
  if ('type' in children) return children;

  return null;
});
