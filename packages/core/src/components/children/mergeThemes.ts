/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';

import { ComplexComponentTheme } from '../ComplexComponentTheme';
import { PropsGetter } from '../PropsGetter';
import { BuiltInChildTheme } from './ChildTheme';

export const mergeThemes = <Theme extends ComplexComponentTheme>(
  theme1: Theme,
  theme2: Theme | undefined,
): Theme => {
  if (!theme2) return theme1;

  const allKeys = new Set(Object.keys(theme1).concat(Object.keys(theme2)));
  // @ts-ignore Type '{}' is not assignable to type 'Theme'.ts(2322)
  const mergedTheme: Theme = {};

  allKeys.forEach(prop => {
    const theme1Obj = theme1[prop];
    const theme2Obj = theme2[prop];
    if (theme1Obj === undefined) {
      mergedTheme[prop] = theme2Obj;
    } else if (theme2Obj === undefined) {
      mergedTheme[prop] = theme1Obj;
    } else {
      let newThemeObj:
        | BuiltInChildTheme<unknown, unknown, unknown>
        | PropsGetter<unknown, unknown>;
      if (typeof theme1Obj === 'function' || typeof theme2Obj === 'function') {
        if (
          typeof theme1Obj !== 'function' ||
          typeof theme2Obj !== 'function'
        ) {
          throw new Error(
            `Type of theme properties don't match. Property name: ${prop}`,
          );
        }

        newThemeObj = mergeThemeGetters(theme1Obj, theme2Obj) as PropsGetter<
          unknown,
          unknown
        >;
      } else if (
        typeof theme1Obj === 'object' ||
        typeof theme2Obj === 'object'
      ) {
        if (typeof theme1Obj !== 'object' || typeof theme2Obj !== 'object') {
          throw new Error(
            `Type of theme properties don't match. Property name: ${prop}`,
          );
        }

        newThemeObj = {};
        // @ts-ignore Cannot assign to 'getProps'
        // because it is a read-only property.
        // It's fine to mutate it here.
        newThemeObj.getProps = mergeThemeGetters(
          theme1Obj.getProps,
          theme2Obj.getProps,
        );

        // @ts-ignore Cannot assign to 'getStyle'
        // because it is a read-only property.
        // It's fine to mutate it here.
        newThemeObj.getStyle = mergeThemeGetters(
          theme1Obj.getStyle,
          theme2Obj.getStyle,
        );

        if (theme2Obj.component) {
          // @ts-ignore Cannot assign to 'component'
          // because it is a read-only property.ts(2540)
          // It's fine to mutate it here.
          newThemeObj.component = theme2Obj.component;
        } else {
          // @ts-ignore Cannot assign to 'component'
          // because it is a read-only property.ts(2540)
          // It's fine to mutate it here.
          newThemeObj.component = theme1Obj.component;
        }
      } else {
        throw new Error(`Invalid theme property type for property: ${prop}`);
      }

      mergedTheme[prop] = newThemeObj;
    }
  });

  return mergedTheme;
};

export const mergeThemeGetters = (
  getter1: PropsGetter<unknown, unknown> | undefined,
  getter2: PropsGetter<unknown, unknown> | undefined,
): PropsGetter<unknown, unknown> | undefined => {
  if (getter1 === undefined && getter2 === undefined) return undefined;
  if (getter1 !== undefined && getter2 === undefined) return getter1;
  if (getter2 !== undefined && getter1 === undefined) return getter2;

  const getter: PropsGetter<unknown, unknown> = (props: unknown): unknown =>
    // @ts-ignore Object is possibly 'undefined'.ts(2532)
    // Really? It's checked above...
    merge({}, getter1(props) || {}, getter2(props) || {});

  return getter;
};
