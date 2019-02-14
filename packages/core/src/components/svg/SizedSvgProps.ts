/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SvgProps } from 'react-native-svg';

import { Size } from '../../sizing/Size';

export type SizedSvgProps = { [key in Size]: SvgProps };
