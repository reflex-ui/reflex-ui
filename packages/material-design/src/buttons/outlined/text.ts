/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalTextTheme,
  TextPropsGetter,
} from '@reflex-ui/core';

import { getDefaultButtonTextColorStyle } from '../default/text';

export const getOutlinedButtonTextProps: TextPropsGetter<ButtonProps> = (
  props: ButtonProps,
) => ({
  style: {
    ...getDefaultButtonTextColorStyle(props),
  },
});

export const outlinedButtonTextTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalTextTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getOutlinedButtonTextProps,
    },
  },
};
