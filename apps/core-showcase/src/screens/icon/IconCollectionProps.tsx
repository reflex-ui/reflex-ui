/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ColorTheme, FlexSvgSubPropsGetter } from '@reflex-ui/core';

export interface IconCollectionProps {
  readonly colorTheme: ColorTheme;
  readonly getSubProps?: FlexSvgSubPropsGetter;
  readonly invertColor?: boolean;
  readonly title: string;
}
