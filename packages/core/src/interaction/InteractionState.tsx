/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { createContext, useContext, useMemo, useState } from 'react';

import { InteractionEvent } from './InteractionEvent';
import { InteractionType } from './InteractionType';

export interface InteractionState {
  readonly event?: InteractionEvent;
  readonly type: InteractionType;
}

export interface InteractionStateContextValue {
  readonly interactionState: InteractionState;
  readonly setInteractionState: (interactionState: InteractionState) => void;
}

export interface InteractionStateProviderProps {
  readonly children: React.ReactNode;
  readonly value: InteractionState;
}

/*
 * We don't export InteractionStateContext here on purpose. We want to provide
 * a more refined and strict API. Needles to say, if for any reason
 * such design proves itself to be limiting or causes any issues,
 * we should re-evaluate it.
 * This Context API design (InteractionStateProvider and useInteractionState)
 * is totally inspired by the excellent Kent C. Dodds'
 * "How to use React Context effectively" article here:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

const InteractionStateContext = createContext<
  InteractionStateContextValue | undefined
>(undefined);
InteractionStateContext.displayName = 'InteractionStateContext';

export const InteractionStateProvider = ({
  children,
  value,
}: InteractionStateProviderProps) => {
  const [interactionState, setInteractionState] = useState<InteractionState>(
    value,
  );
  if (value !== interactionState) setInteractionState(value);

  const contextValue = useMemo<InteractionStateContextValue>(
    () => ({
      interactionState,
      setInteractionState,
    }),
    [interactionState, value],
  );

  return (
    <InteractionStateContext.Provider
      children={children}
      value={contextValue}
    />
  );
};

export const useInteractionState = ():
  | InteractionStateContextValue
  | undefined => useContext(InteractionStateContext);
