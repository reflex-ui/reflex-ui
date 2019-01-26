/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const isSizeEnumValue = (value: string): boolean =>
  value === 'xxsmall' ||
  value === 'xsmall' ||
  value === 'small' ||
  value === 'medium' ||
  value === 'large' ||
  value === 'xlarge' ||
  value === 'xxlarge';
