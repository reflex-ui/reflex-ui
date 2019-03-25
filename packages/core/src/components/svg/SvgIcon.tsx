/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { propsPipe } from '../../utils/propsPipe';
import { handleChildrenProps } from '../handleChildrenProps';
import { handlePatchThemeProps } from '../handlePatchThemeProps';
import { handleThemeGetProps } from '../handleThemeGetProps';
import { processComponent } from '../processComponent';
import { validateNoStyleProps } from '../validateNoStyleProps';
import { handleRfxSvgChildren, renderRfxSvgView } from './RfxSvg';
import { RfxSvgProps, RfxSvgPropsOptional } from './RfxSvgProps';
import { useDefaultSvgIconProps } from './useDefaultSvgIconProps';

let SvgIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => {
  validateNoStyleProps(props);
  let newProps = useDefaultSvgIconProps(props);
  if (props.children === undefined || props.children === null) return null;
  newProps = propsPipe<RfxSvgProps>([
    handlePatchThemeProps,
    handleThemeGetProps,
    handleChildrenProps,
    handleRfxSvgChildren,
  ])(newProps);

  return renderRfxSvgView(newProps);
};

SvgIcon = processComponent<RfxSvgPropsOptional>(SvgIcon, {
  name: 'SvgIcon',
});

export { SvgIcon };
