/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const scrollable = () => {
  const styleString = `
  html, body {
    height: 100%;
  }

  body {
    overflow: hidden;
  }

  body > div, body > div > div {
    height: 100%;
  }
  `;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(styleString));
  document.head.appendChild(style);
};
