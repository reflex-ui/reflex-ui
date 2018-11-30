/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface SizedSubTheme<T> {
  readonly allSizes: T;
  readonly large: T;
  readonly medium: T;
  readonly none: T;
  readonly small: T;
  readonly xlarge: T;
  readonly xsmall: T;
}

export type OptionalSizedSubTheme<T> = Partial<SizedSubTheme<T>>;
