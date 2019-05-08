/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useMemo, useState } from 'react';

import { Breakpoints } from './Breakpoints';
import { DimensionsProps } from './DimensionsProps';
import { useDimensions } from './useDimensions';

export interface ResponsivenessContextValue extends DimensionsProps {
  readonly setBreakpoints: (breakpoints: Breakpoints) => void;
}

export interface ResponsivenessProviderProps {
  readonly children: React.ReactNode;
  readonly breakpoints: Breakpoints;
}

/*
 * We don't export ResponsivenessContext here on purpose. We want to provide
 * a more refined and strict API. Needles to say, if for any reason
 * such design proves itself to be limiting or causes any issues,
 * we should re-evaluate it.
 * This Context API design (ResponsivenessProvider and useResponsiveness)
 * is totally inspired by the excellent Kent C. Dodds'
 * "How to use React Context effectively" article here:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

const ResponsivenessContext = createContext<
  ResponsivenessContextValue | undefined
>(undefined);
ResponsivenessContext.displayName = 'ResponsivenessContext';

export const ResponsivenessProvider = ({
  children,
  breakpoints: breakpointsArgument,
}: ResponsivenessProviderProps) => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>(
    breakpointsArgument,
  );
  const dimensions = useDimensions();

  const contextValue = useMemo<ResponsivenessContextValue>(
    () => ({
      breakpoints,
      dimensions,
      setBreakpoints,
    }),
    [breakpoints, dimensions],
  );

  return (
    <ResponsivenessContext.Provider children={children} value={contextValue} />
  );
};

export const useResponsiveness = (): ResponsivenessContextValue => {
  const contextValue = useContext(ResponsivenessContext);
  if (contextValue === undefined) {
    throw new Error(
      [
        'ReflexUI: useResponsiveness must be used within',
        'a <ResponsivenessProvider>.',
      ].join(' '),
    );
  }

  return contextValue;
};
