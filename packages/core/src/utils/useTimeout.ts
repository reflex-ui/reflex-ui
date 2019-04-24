/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Original code from:
 * https://github.com/siddharthkp/use-timeout
 */

import { useEffect, useRef } from 'react';

export const useTimeout = (
  callback: () => void,
  delay: number | undefined | null,
) => {
  const callbackRef = useRef<() => void>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== undefined && delay !== null) {
      const tick = () => {
        if (callbackRef.current) callbackRef.current();
      };

      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }

    return undefined;
  }, [delay]);
};
