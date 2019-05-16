/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ImageProps } from 'react-native';

import { extractAccessibilityProps } from './extractAccessibilityProps';
import { extractImagePropsAndroid } from './extractImagePropsAndroid';
import { extractImagePropsIOS } from './extractImagePropsIOS';

export const extractImageProps = <Props extends ImageProps>(
  props: Props,
): ImageProps => {
  const {
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    defaultSource,
    loadingIndicatorSource,
    onError,
    onLayout,
    onLoad,
    onLoadEnd,
    onLoadStart,
    progressiveRenderingEnabled,
    resizeMethod,
    resizeMode,
    source,
    style,
    testID,
    ...otherProps
  } = props;

  return {
    ...extractAccessibilityProps(otherProps),
    ...extractImagePropsAndroid(otherProps),
    ...extractImagePropsIOS(otherProps),
    ...((borderBottomLeftRadius && { borderBottomLeftRadius }) || {}),
    ...((borderBottomRightRadius && { borderBottomRightRadius }) || {}),
    ...((borderRadius && { borderRadius }) || {}),
    ...((borderTopLeftRadius && { borderTopLeftRadius }) || {}),
    ...((borderTopRightRadius && { borderTopRightRadius }) || {}),
    ...((defaultSource && { defaultSource }) || {}),
    ...((loadingIndicatorSource && { loadingIndicatorSource }) || {}),
    ...((onError && { onError }) || {}),
    ...((onLayout && { onLayout }) || {}),
    ...((onLoad && { onLoad }) || {}),
    ...((onLoadEnd && { onLoadEnd }) || {}),
    ...((onLoadStart && { onLoadStart }) || {}),
    ...((progressiveRenderingEnabled && { progressiveRenderingEnabled }) || {}),
    ...((resizeMethod && { resizeMethod }) || {}),
    ...((resizeMode && { resizeMode }) || {}),
    source,
    ...((style && { style }) || {}),
    ...((testID && { testID }) || {}),
  };
};
