/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { InteractionStatePropsOptional } from '../interaction/InteractionStateProps';
import { ColorProps } from './ColorProps';

export interface ThemedColorGetterInput
  extends ColorProps,
    InteractionStatePropsOptional {
  readonly onColor?: boolean;
}
