/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { handleRfxSvgChildren, renderRfxSvgView } from './RfxSvg';
import { RfxSvgPropsOptional } from './RfxSvgProps';
import { useDefaultSvgIconProps } from './useDefaultSvgIconProps';

let SvgIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultSvgIconProps(props);
  if (props.children === undefined || props.children === null) return null;
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleRfxSvgChildren(newProps);
  return renderRfxSvgView(newProps);
};

SvgIcon = processComponent<RfxSvgPropsOptional>(SvgIcon, {
  name: 'SvgIcon',
});

export { SvgIcon };
