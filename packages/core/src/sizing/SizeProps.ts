/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Size } from './Size';

export interface SizeProps {
  readonly size: Size;
}

export type OptionalSizeProps = Partial<SizeProps>;
