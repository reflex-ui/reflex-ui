/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { forwardRef, Ref } from 'react';
import { Image } from 'react-native';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { useComponentsTheme } from '../ComponentsTheme';
import { renderRfxImageComponent } from '../image/renderRfxImageComponent';
import {
  RfxSizedImageProps,
  RfxSizedImagePropsOptional,
} from '../image/RfxSizedImageProps';
import { RfxSizedImageTheme } from '../image/RfxSizedImageTheme';
// tslint:disable-next-line:max-line-length
import { useDefaultRfxSizedImageProps } from '../image/useDefaultRfxSizedImageProps';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';

const useTheme = (theme?: RfxSizedImageTheme): RfxSizedImageTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (
    componentsTheme.avatarImage === undefined ||
    componentsTheme.avatarImage === null
  ) {
    throw new MissingComponentThemeError('<AvatarImage>');
  }

  return componentsTheme.avatarImage;
};

let AvatarImage: React.ComponentType<RfxSizedImagePropsOptional> = forwardRef(
  (props: RfxSizedImagePropsOptional, ref: Ref<Image>) => {
    const theme = useTheme(props.theme);

    let newProps: RfxSizedImageProps = useDefaultRfxSizedImageProps(
      props,
      theme,
    );
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    return renderRfxImageComponent({
      props: newProps,
      ref,
    });
  },
);

AvatarImage = processComponent<RfxSizedImagePropsOptional>(AvatarImage, {
  name: 'AvatarImage',
});

export { AvatarImage };
