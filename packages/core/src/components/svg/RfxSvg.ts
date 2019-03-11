/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { RfxSvgPropsOptional } from './RfxSvgProps';
import { SimpleRfxSvg } from './SimpleRfxSvg';
import { withDefaultRfxSvgProps } from './withDefaultRfxSvgProps';

const RfxSvg: React.ComponentType<RfxSvgPropsOptional> = withDefaultRfxSvgProps(
  SimpleRfxSvg,
);

export { RfxSvg };
