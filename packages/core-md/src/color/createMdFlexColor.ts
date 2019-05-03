/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createFlexColor as createFlexColorCore,
  FlexColor,
} from '@reflex-ui/core';

import { disabledGrey300Contained } from './colors/disabled/contained';
import {
  disabledGrey400Uncontained,
  disabledGrey500Uncontained,
} from './colors/disabled/uncontained';
import { createContainedLayeredColor } from './createContainedLayeredColor';
import { createUncontainedLayeredColor } from './createUncontainedLayeredColor';
import { MdFlexColorFactoryInput } from './MdFlexColorFactoryInput';

export const createMdFlexColor = ({
  containedColor,
  containedColorDisabled = disabledGrey300Contained,
  containedColorFactory = createContainedLayeredColor,
  containedInvertedColor,
  containedInvertedColorDisabled = disabledGrey300Contained,
  uncontainedColor,
  uncontainedColorDisabled = disabledGrey400Uncontained,
  uncontainedColorFactory = createUncontainedLayeredColor,
  uncontainedInvertedColor,
  uncontainedInvertedColorDisabled = disabledGrey500Uncontained,
}: MdFlexColorFactoryInput): FlexColor =>
  createFlexColorCore({
    containedColor,
    containedColorDisabled,
    containedColorFactory,
    containedInvertedColor,
    containedInvertedColorDisabled,
    uncontainedColor,
    uncontainedColorDisabled,
    uncontainedColorFactory,
    uncontainedInvertedColor,
    uncontainedInvertedColorDisabled,
  });
