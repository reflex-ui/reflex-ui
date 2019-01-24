/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AlignContent } from './AlignContent';
import { AlignItems } from './AlignItems';
import { AlignSelf } from './AlignSelf';
import { FlexDirection } from './FlexDirection';
import { FlexWrap } from './FlexWrap';
import { JustifyContent } from './JustifyContent';

export interface FlexboxProps {
  readonly alignContent?: AlignContent;
  readonly alignItems?: AlignItems;
  readonly alignSelf?: AlignSelf;
  readonly flex?: number;
  readonly flexBasis?: number | 'auto';
  readonly flexDirection?: FlexDirection;
  readonly flexGrow?: number;
  readonly flexShrink?: number;
  readonly flexWrap?: FlexWrap;
  readonly justifyContent?: JustifyContent;
}
