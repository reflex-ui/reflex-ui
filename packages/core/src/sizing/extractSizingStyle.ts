/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ViewStyleGetter } from '../components/view';
import { SizingPropsOptional } from './SizingProps';

export const extractSizingStyle: ViewStyleGetter<SizingPropsOptional> = ({
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
}) => ({
  ...(height ? { height } : {}),
  ...(maxHeight ? { maxHeight } : {}),
  ...(maxWidth ? { maxWidth } : {}),
  ...(minHeight ? { minHeight } : {}),
  ...(minWidth ? { minWidth } : {}),
  ...(width ? { width } : {}),
});
