/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { OptionalFlexSvgProps } from './FlexSvgProps';
import { SimpleFlexSvg } from './SimpleFlexSvg';
import { withDefaultFlexSvgProps } from './withDefaultFlexSvgProps';

const FlexSvg: React.ComponentType<
  OptionalFlexSvgProps
> = withDefaultFlexSvgProps(SimpleFlexSvg);

export { FlexSvg };
