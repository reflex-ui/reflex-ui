/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Ref } from 'react';
import { Image, ImageProps } from 'react-native';

import { OnLayoutProps } from '../../responsiveness/OnLayoutProps';
import { MarginProps } from '../../spacing/MarginProps';
import {
  ComponentThemeProps,
  ComponentThemePropsOptional,
} from '../ComponentThemeProps';
import { RfxImageTheme } from './RfxImageTheme';

export interface RfxImagePropsBase<Props, Theme>
  extends ComponentThemeProps<Props, Theme>,
    ImageProps,
    MarginProps,
    OnLayoutProps {
  readonly ref?: Ref<Image>;
}

export interface RfxImagePropsBaseOptional<Props, Theme>
  extends ComponentThemePropsOptional<Props, Theme>,
    ImageProps,
    MarginProps,
    OnLayoutProps {
  readonly ref?: Ref<Image>;
}

export interface RfxImageProps
  extends RfxImagePropsBase<RfxImageProps, RfxImageTheme> {}

export interface RfxImagePropsOptional
  extends RfxImagePropsBaseOptional<RfxImageProps, RfxImageTheme> {}
