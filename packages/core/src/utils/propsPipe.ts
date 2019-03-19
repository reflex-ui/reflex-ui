/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

type fn<Props> = (props: Props) => Props;

export const propsPipe = <Props>(functions: fn<Props>[]): fn<Props> => (
  data: Props,
): Props => functions.reduce((value, func) => func(value), data);
