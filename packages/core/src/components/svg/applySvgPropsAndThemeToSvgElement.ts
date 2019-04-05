/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { SvgProps } from 'react-native-svg';

import { cloneElement } from '../../utils';
// tslint:disable-next-line:max-line-length
import { extractSvgPropsFromRfxSvgProps } from './extractSvgPropsFromRfxSvgProps';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';

export const applySvgPropsAndThemeToSvgElement = (
  props: RfxSvgProps,
): React.ReactNode => {
  if (props.children === undefined || props.children === null) return null;
  const children = props.children as React.ReactElement<RfxSvgPropsOptional>;

  if (typeof children !== 'object') {
    throw new Error('ReflexUI: RfxSvg children must be a valid React element.');
  }

  const svgProps: React.PropsWithChildren<SvgProps> = {
    ...extractSvgPropsFromRfxSvgProps(props),
    children,
  };

  const themedSvg = children
    ? cloneElement({ element: children, props: svgProps })
    : undefined;

  return themedSvg;
};
