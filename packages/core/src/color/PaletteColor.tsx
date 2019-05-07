/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useMemo, useState } from 'react';

import { FlexColor, FlexColorOptional } from './FlexColor';

export interface PaletteColor {
  readonly color: FlexColor;
  readonly name: string;
  readonly tone?: string;
}

export interface PaletteColorOptional {
  readonly color: FlexColorOptional;
  readonly name: string;
  readonly tone?: string;
}

export interface PaletteColorContextValue {
  readonly paletteColor: PaletteColor;
  readonly setPaletteColor: (paletteColor: PaletteColor) => void;
}

export interface PaletteColorProviderProps {
  readonly children: React.ReactNode;
  readonly value: PaletteColor;
}

/*
 * We don't export PaletteColorContext here on purpose. We want to provide
 * a more refined and strict API. Needles to say, if for any reason
 * such design proves itself to be limiting or causes any issues,
 * we should re-evaluate it.
 * This Context API design (PaletteColorProvider and usePalette)
 * is totally inspired by the excellent Kent C. Dodds'
 * "How to use React Context effectively" article here:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

const PaletteColorContext = createContext<PaletteColorContextValue | undefined>(
  undefined,
);
PaletteColorContext.displayName = 'PaletteColorContext';

export const PaletteColorProvider = ({
  children,
  value,
}: PaletteColorProviderProps) => {
  const [paletteColor, setPaletteColor] = useState<PaletteColor>(value);

  const contextValue = useMemo<PaletteColorContextValue>(
    () => ({
      paletteColor,
      setPaletteColor,
    }),
    [paletteColor],
  );

  return (
    <PaletteColorContext.Provider children={children} value={contextValue} />
  );
};

export const usePaletteColor = (): PaletteColorContextValue | undefined =>
  useContext(PaletteColorContext);
