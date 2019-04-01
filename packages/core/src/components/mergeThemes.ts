/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import merge from 'lodash/merge';

import { Function1 } from '../utils-ts/Function1';

export function mergeThemes<Theme extends {}>(
  theme1: Theme | undefined | null,
  theme2: Theme | undefined | null,
): Theme {
  // @ts-ignore Type '{}' is not assignable to type 'Theme'.ts(2322)
  if (theme2 === undefined || theme2 === null) return theme1 || {};
  // @ts-ignore Type '{}' is not assignable to type 'Theme'.ts(2322)
  if (theme1 === undefined || theme1 === null) return theme2 || {};
  if (typeof theme1 !== 'object' && typeof theme1 !== 'function') {
    throw new Error(
      [
        'Rfx.mergeThemes: Argument theme1 must be of type object or function,',
        `but received: ${typeof theme1}`,
      ].join(' '),
    );
  }
  if (typeof theme2 !== 'object' && typeof theme2 !== 'function') {
    throw new Error(
      [
        'Rfx.mergeThemes: Argument theme2 must be of type object or function,',
        `but received: ${typeof theme2}`,
      ].join(' '),
    );
  }

  const allKeys = new Set(Object.keys(theme1).concat(Object.keys(theme2)));
  // @ts-ignore Type '{}' is not assignable to type 'Theme'.ts(2322)
  const mergedTheme: Theme = {};

  allKeys.forEach(prop => {
    // @ts-ignore Element implicitly has an 'any' type
    // because type '{}' has no index signature.ts(7017)
    const theme1Obj: unknown = theme1[prop];
    // @ts-ignore Element implicitly has an 'any' type
    // because type '{}' has no index signature.ts(7017)
    const theme2Obj: unknown = theme2[prop];

    if (theme1Obj === undefined || theme1Obj === null) {
      // @ts-ignore Element implicitly has an 'any' type
      // because type '{}' has no index signature.ts(7017)
      mergedTheme[prop] = theme2Obj;
    } else if (theme2Obj === undefined || theme2Obj === null) {
      // @ts-ignore Element implicitly has an 'any' type
      // because type '{}' has no index signature.ts(7017)
      mergedTheme[prop] = theme1Obj;
    } else {
      let newThemeObj;
      if (typeof theme1Obj === 'function' || typeof theme2Obj === 'function') {
        if (
          typeof theme1Obj !== 'function' ||
          typeof theme2Obj !== 'function'
        ) {
          throw new Error(
            `Type of theme properties don't match. Property name: ${prop}`,
          );
        }

        if (prop === 'component') {
          if (theme2Obj) {
            newThemeObj = theme2Obj;
          } else {
            newThemeObj = theme1Obj;
          }
        } else if (prop === 'getProps' || prop === 'getStyle') {
          newThemeObj = mergeThemeGetters(
            theme1Obj as Function1<unknown, unknown>,
            theme2Obj as Function1<unknown, unknown>,
          ) as Function1<unknown, unknown>;
        } else {
          // @ts-ignore Parameter 'props' implicitly has an 'any' type.ts(7006)
          newThemeObj = props =>
            mergeThemes(theme1Obj(props), theme2Obj(props));
        }
      } else if (
        typeof theme1Obj === 'object' ||
        typeof theme2Obj === 'object'
      ) {
        if (typeof theme1Obj !== 'object' || typeof theme2Obj !== 'object') {
          throw new Error(
            `Type of theme properties don't match. Property name: ${prop}`,
          );
        }

        newThemeObj = mergeThemes(theme1Obj, theme2Obj);
      } else {
        throw new Error(`Invalid theme property type for property: ${prop}`);
      }

      // @ts-ignore Element implicitly has an 'any' type
      // because type '{}' has no index signature.ts(7017)
      mergedTheme[prop] = newThemeObj;
    }
  });

  return mergedTheme;
}

export const mergeThemeGetters = (
  getter1?: Function1<unknown, unknown> | undefined,
  getter2?: Function1<unknown, unknown> | undefined,
): Function1<unknown, unknown> | undefined => {
  if (getter1 === undefined && getter2 === undefined) return undefined;
  if (getter1 !== undefined && getter2 === undefined) return getter1;
  if (getter2 !== undefined && getter1 === undefined) return getter2;

  const mergedGetter: Function1<unknown, unknown> = (props: unknown): unknown =>
    // @ts-ignore Object is possibly 'undefined'.ts(2532)
    // Really? It's checked above...
    merge({}, getter1(props) || {}, getter2(props) || {});

  return mergedGetter;
};
