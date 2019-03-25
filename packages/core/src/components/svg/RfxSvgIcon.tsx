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
import { useDefaultRfxSvgIconProps } from './useDefaultRfxSvgIconProps';

let RfxSvgIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultRfxSvgIconProps(props);
  if (props.children === undefined || props.children === null) return null;
  newProps = handlePatchThemeProps(newProps);
  newProps = handleChildrenProps(newProps);
  newProps = handleRfxSvgChildren(newProps);
  return renderRfxSvgView(newProps);
};

RfxSvgIcon = processComponent<RfxSvgPropsOptional>(RfxSvgIcon, {
  name: 'SvgIcon',
});

export { RfxSvgIcon };
