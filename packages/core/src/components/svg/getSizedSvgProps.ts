/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { isSizeEnumValue } from '../../sizing/isSizeEnumValue';
import { FlexSvgProps } from './FlexSvgProps';
import { SizedSvgPropsGetter } from './SizedSvgPropsGetter';

export const getSizedSvgProps: SizedSvgPropsGetter<
  FlexSvgProps
> = sizedSvgProps => ({ height, size, width }) => ({
  ...(isSizeEnumValue(size as string)
    ? sizedSvgProps[size]
    : { height: size, width: size }),
  ...(height ? { height } : {}),
  ...(width ? { width } : {}),
});
