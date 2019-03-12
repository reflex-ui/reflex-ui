/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export class MissingComponentThemeError extends Error {
  constructor(message: string) {
    super(`Rfx: Missing theme for component: ${message}.`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingComponentThemeError);
    }
  }
}
