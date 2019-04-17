/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { Text } from 'react-native';

import { extractTextProps } from '../../utils/props';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';
import { renderTextComponent } from './renderTextComponent';
import { RfxTextProps } from './RfxTextProps';

export const renderRfxTextComponent = (
  props: RfxTextProps,
  ref: Ref<Text>,
): React.ReactElement | null => {
  let newProps = processComponentProps(props);
  newProps = processThemeAndStyleProps(newProps, newProps.theme);
  const { children } = newProps;

  if (children === undefined || children === null) return null;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    const Component = newProps.theme.component;
    const textProps = {
      ...extractTextProps(newProps),
      children,
    };
    return renderTextComponent({ Component, props: newProps, ref, textProps });
  }

  if ('type' in children) return children;

  return null;
};
