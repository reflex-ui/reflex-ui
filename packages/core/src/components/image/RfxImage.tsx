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
import { RfxImageProps, RfxImagePropsOptional } from '../image/RfxImageProps';
import { RfxImageTheme } from '../image/RfxImageTheme';
import { processComponent } from '../processComponent';
import { processComponentProps } from '../processComponentProps';
import { processThemeAndStyleProps } from '../processThemeAndStyleProps';

const useTheme = (theme?: RfxImageTheme): RfxImageTheme => {
  const { componentsTheme } = useComponentsTheme();

  if (theme !== undefined && theme !== null) return theme;
  if (componentsTheme.image === undefined || componentsTheme.image === null) {
    throw new MissingComponentThemeError('<RfxImage>');
  }

  return componentsTheme.image;
};

let RfxImage: React.ComponentType<RfxImagePropsOptional> = forwardRef(
  (props: RfxImagePropsOptional, ref: Ref<Image>) => {
    const theme = useTheme(props.theme);

    let newProps: RfxImageProps = {
      ...props,
      theme,
    };
    newProps = { ...newProps, ...useOnLayout(newProps) };
    newProps = processComponentProps(newProps);
    newProps = processThemeAndStyleProps(newProps, newProps.theme);

    return renderRfxImageComponent({
      props: newProps,
      ref,
    });
  },
);

RfxImage = processComponent<RfxImagePropsOptional>(RfxImage, {
  name: 'RfxImage',
});

export { RfxImage };
