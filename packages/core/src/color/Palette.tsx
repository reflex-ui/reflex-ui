/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useMemo, useState } from 'react';

import { PaletteColor, PaletteColorOptional } from './PaletteColor';

export interface Palette {
  readonly error: PaletteColor;
  readonly errorDark: PaletteColor;
  readonly errorLight: PaletteColor;
  readonly primary: PaletteColor;
  readonly primaryDark: PaletteColor;
  readonly primaryLight: PaletteColor;
  readonly screen: PaletteColor;
  readonly screenDark: PaletteColor;
  readonly screenLight: PaletteColor;
  readonly secondary: PaletteColor;
  readonly secondaryDark: PaletteColor;
  readonly secondaryLight: PaletteColor;
  readonly success: PaletteColor;
  readonly successDark: PaletteColor;
  readonly successLight: PaletteColor;
  readonly surface: PaletteColor;
  readonly surfaceDark: PaletteColor;
  readonly surfaceLight: PaletteColor;
  readonly warning: PaletteColor;
  readonly warningDark: PaletteColor;
  readonly warningLight: PaletteColor;
}

export type PaletteOptional = { [P in keyof Palette]?: PaletteColorOptional };

export interface PaletteContextValue {
  readonly palette: Palette;
  readonly setPalette: (palette: Palette) => void;
}

export interface PaletteProviderProps {
  readonly children: React.ReactNode;
  readonly value: Palette;
}

/*
 * We don't export PaletteContext here on purpose. We want to provide
 * a more refined and strict API. Needles to say, if for any reason
 * such design proves itself to be limiting or causes any issues,
 * we should re-evaluate it.
 * This Context API design (PaletteProvider and usePalette)
 * is totally inspired by the excellent Kent C. Dodds'
 * "How to use React Context effectively" article here:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

const PaletteContext = createContext<PaletteContextValue | undefined>(
  undefined,
);
PaletteContext.displayName = 'PaletteContext';

export const PaletteProvider = ({ children, value }: PaletteProviderProps) => {
  const [palette, setPalette] = useState<Palette>(value);

  const contextValue = useMemo<PaletteContextValue>(
    () => ({
      palette,
      setPalette,
    }),
    [palette],
  );

  return <PaletteContext.Provider children={children} value={contextValue} />;
};

export const usePalette = (): PaletteContextValue => {
  const context = useContext(PaletteContext);
  if (context === undefined) {
    throw new Error(
      'ReflexUI: usePalette must be used within a PaletteProvider.',
    );
  }

  const { palette, setPalette } = context;
  if (palette === undefined) {
    throw new Error(
      [
        'ReflexUI: You must provide a Palette object to PaletteProvider, like:',
        '<PaletteProvider value={myPaletteObject}>',
      ].join(' '),
    );
  }

  return {
    palette,
    setPalette,
  };
};
