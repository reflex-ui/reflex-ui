/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { extractTextProps } from '../../utils/props';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeAndStyleProps } from '../handleThemeAndStyleProps';
import { renderTextComponent } from './renderTextComponent';
import { RfxTextProps } from './RfxTextProps';

export const renderRfxTextComponent = (
  props: RfxTextProps,
): React.ReactElement | null => {
  let newProps = handlePatchThemeProps(props);
  newProps = handleChildrenProps(newProps);
  newProps = handleThemeAndStyleProps(newProps, newProps.theme);
  const { children } = newProps;

  if (children === undefined || children === null) return null;

  if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean' ||
    Array.isArray(children)
  ) {
    const textProps = {
      ...extractTextProps(newProps),
      children,
    };
    return renderTextComponent(newProps, textProps, newProps.theme.component);
  }

  if ('type' in children) return children;

  return null;
};
