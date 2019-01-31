/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from './Size';

export interface SizingProps {
  readonly height?: number | string;
  readonly maxHeight?: number | string;
  readonly maxWidth?: number | string;
  readonly minHeight?: number | string;
  readonly minWidth?: number | string;
  readonly size: Size;
  readonly width?: number | string;
}

export type OptionalSizingProps = Partial<SizingProps>;
