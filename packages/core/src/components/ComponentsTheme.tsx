/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useMemo, useState } from 'react';

import { AppBarVariantsTheme } from './app-bar';
import { AvatarTheme } from './avatar';
import { ButtonVariantsTheme } from './button';
import { RfxImageTheme, RfxSizedImageTheme } from './image';
import { OverlaySurfaceTheme } from './overlay-surface';
import { SurfaceTheme } from './surface';
import { RfxSvgVariantsTheme } from './svg';
import { RfxTextVariantsTheme } from './text';
import { TouchableTheme } from './touchable';
import { TouchableSurfaceVariantsTheme } from './touchable-surface';
import { RfxViewTheme, RfxViewVariantsTheme } from './view';

export interface ComponentsTheme {
  readonly appBar?: AppBarVariantsTheme;
  readonly avatar?: AvatarTheme;
  readonly avatarImage?: RfxSizedImageTheme;
  readonly button?: ButtonVariantsTheme;
  readonly image?: RfxImageTheme;
  readonly list?: SurfaceTheme;
  readonly listItem?: RfxViewTheme;
  readonly overlaySurface?: OverlaySurfaceTheme;
  readonly screen?: SurfaceTheme;
  readonly surface?: SurfaceTheme;
  readonly svg?: RfxSvgVariantsTheme;
  readonly text?: RfxTextVariantsTheme;
  readonly touchable?: TouchableTheme;
  readonly touchableSurface?: TouchableSurfaceVariantsTheme;
  readonly views?: RfxViewVariantsTheme;
}

export interface ComponentsThemeContextValue {
  readonly componentsTheme: ComponentsTheme;
  readonly setComponentsTheme: (componentsTheme: ComponentsTheme) => void;
}

export interface ComponentsThemeProviderProps {
  readonly children: React.ReactNode;
  readonly value: ComponentsTheme;
}

/*
 * We don't export ComponentsThemeContext here on purpose. We want to provide
 * a more refined and strict API. Needles to say, if for any reason
 * such design proves itself to be limiting or causes any issues,
 * we should re-evaluate it.
 * This Context API design (ComponentsThemeProvider and useComponentsTheme)
 * is totally inspired by the excellent Kent C. Dodds'
 * "How to use React Context effectively" article here:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

const ComponentsThemeContext = createContext<
  ComponentsThemeContextValue | undefined
>(undefined);
ComponentsThemeContext.displayName = 'ComponentsThemeContext';

export const ComponentsThemeProvider = ({
  children,
  value,
}: ComponentsThemeProviderProps) => {
  const [componentsTheme, setComponentsTheme] = useState<ComponentsTheme>(
    value,
  );
  if (value !== componentsTheme) setComponentsTheme(value);

  const contextValue = useMemo<ComponentsThemeContextValue>(
    () => ({
      componentsTheme,
      setComponentsTheme,
    }),
    [componentsTheme],
  );

  return (
    <ComponentsThemeContext.Provider children={children} value={contextValue} />
  );
};

export const useComponentsTheme = (): ComponentsThemeContextValue => {
  const contextValue = useContext(ComponentsThemeContext);
  if (contextValue === undefined) {
    throw new Error(
      [
        'ReflexUI: useComponentsTheme must be used within a',
        '<ComponentsThemeProvider>.',
      ].join(' '),
    );
  }

  return contextValue;
};
