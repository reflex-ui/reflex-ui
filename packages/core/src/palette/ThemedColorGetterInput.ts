/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// tslint:disable-next-line:max-line-length
import { OptionalInteractionStateProps } from '../interaction/InteractionStateProps';
import { PaletteThemeProps } from './PaletteThemeProps';

export interface ThemedColorGetterInput
  extends OptionalInteractionStateProps,
    PaletteThemeProps {
  readonly contained?: boolean;
  readonly invertColor?: boolean;
  readonly onColor?: boolean;
}
