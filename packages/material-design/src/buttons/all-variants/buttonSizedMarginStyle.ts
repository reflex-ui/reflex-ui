/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size, SizedMarginStyle } from '@reflex-ui/core';

export const buttonSizedMarginStyle: SizedMarginStyle = {
  [Size.L]: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  [Size.M]: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  [Size.NONE]: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  [Size.S]: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  [Size.XL]: {
    marginHorizontal: 32,
    marginVertical: 20,
  },
  [Size.XS]: {
    marginHorizontal: 4,
    marginVertical: 4,
  },
};
