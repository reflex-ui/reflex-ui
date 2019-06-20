/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Original code from:
 * https://github.com/siddharthkp/use-timeout
 */

import { MutableRefObject, Ref, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { ElementMeasurement } from './ElementMeasurement';

export interface UseMeasureInput {
  readonly onMeasure: (measurement: ElementMeasurement) => void;
  readonly deps: unknown[];
  readonly intervalMiliseconds?: number;
  readonly maxTries?: number;
  readonly ref: Ref<View> | undefined;
}

export const useMeasure = ({
  intervalMiliseconds = 50,
  deps,
  maxTries = 20,
  onMeasure,
  ref,
}: UseMeasureInput) => {
  const onMeasureRef = useRef<(measurement: ElementMeasurement) => void>();
  const [totalTries, setTotalTries] = useState(0);

  useEffect(() => {
    onMeasureRef.current = onMeasure;
  }, [onMeasure]);

  useEffect(() => {
    if (deps === undefined || deps === null || deps.length < 1) return;
    if (
      ref === undefined ||
      ref === null ||
      (ref as MutableRefObject<View>).current === undefined ||
      (ref as MutableRefObject<View>).current === null
    ) {
      return;
    }

    const tick = () => {
      setTotalTries(currentTotalTries => currentTotalTries + 1);
      if (totalTries >= maxTries) clearInterval(id);
      if (
        ref === undefined ||
        ref === null ||
        (ref as MutableRefObject<View>).current === undefined ||
        (ref as MutableRefObject<View>).current === null ||
        (ref as MutableRefObject<View>).current.measure === undefined ||
        (ref as MutableRefObject<View>).current.measure === null
      ) {
        return;
      }
      (ref as MutableRefObject<View>).current.measure(
        (x, y, width, height, pageX, pageY) => {
          if (
            x === 0 &&
            y === 0 &&
            width === 0 &&
            height === 0 &&
            pageX === 0 &&
            pageY === 0
          ) {
            return;
          }
          clearInterval(id);
          if (onMeasureRef.current) {
            onMeasureRef.current({ height, pageX, pageY, width, x, y });
          }
        },
      );
    };

    setTotalTries(0);
    const id = setInterval(tick, intervalMiliseconds);
    tick();
    return () => clearInterval(id);
  }, deps);
};
