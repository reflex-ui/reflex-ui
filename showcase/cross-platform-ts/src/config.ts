/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface Config {
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

export const config: Config = {
  app: {
    name: 'example',
  },
  web: {
    root: 'root',
  },
};
