/*
 * This code is copied from:
 * https://usehooks.com/useWhyDidYouUpdate/
 *
 * A huge thanks to Bruno Lemos for the idea and original code:
 * https://twitter.com/brunolemos/status/1090377532845801473
 */

import { useEffect, useRef } from 'react';

export function useWhyDidYouUpdate<Props extends {}>(
  name: string,
  props: Props,
) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef<Props>();

  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        // @ts-ignore
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          // @ts-ignore
          changesObj[key] = {
            // @ts-ignore
            from: previousProps.current[key],
            // @ts-ignore
            to: props[key],
          };
        }
      });

      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        // tslint:disable-next-line:no-console
        console.log('[why-did-you-update]', name, changesObj);
      }
    }

    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}
