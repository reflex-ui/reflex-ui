/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Ref } from 'react';
import { Text, TextProps } from 'react-native';

import { extractTextProps } from '../../utils/props';
import { PrimitiveComponentProps } from '../PrimitiveComponentProps';
import { renderTextComponent } from './renderTextComponent';
import { RfxTextPropsBase } from './RfxTextProps';

export const renderRfxTextComponent = <
  Props extends RfxTextPropsBase<Props, Theme>,
  Theme
>(
  props: Props,
  ref: Ref<Text>,
  Component?:
    | typeof Text
    | React.ComponentType<PrimitiveComponentProps<Props>> & TextProps,
): React.ReactElement | null => {
  const { children } = props;

  if (children === undefined || children === null) return null;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    const textProps = {
      ...extractTextProps(props),
      children,
    };
    return renderTextComponent({ Component, props, ref, textProps });
  }

  if ('type' in children) return children;

  return null;
};
