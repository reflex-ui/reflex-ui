/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const moveTransformPropsToTransformArray = <
  PropValue extends {}
>(props: {
  [index: string]: PropValue;
}): { [index: string]: PropValue | [{ [index: string]: PropValue }] } | {} => {
  if (props === undefined || props === null) return {};

  const {
    perspective,
    rotate,
    rotateX,
    rotateY,
    rotateZ,
    scale,
    scaleX,
    scaleY,
    skewX,
    skewY,
    translateX,
    translateY,
    ...otherProps
  } = props;
  const transformProps = {
    ...(perspective !== undefined && { perspective }),
    ...(rotate !== undefined && { rotate }),
    ...(rotateX !== undefined && { rotateX }),
    ...(rotateY !== undefined && { rotateY }),
    ...(rotateZ !== undefined && { rotateZ }),
    ...(scale !== undefined && { scale }),
    ...(scaleX !== undefined && { scaleX }),
    ...(scaleY !== undefined && { scaleY }),
    ...(skewX !== undefined && { skewX }),
    ...(skewY !== undefined && { skewY }),
    ...(translateX !== undefined && { translateX }),
    ...(translateY !== undefined && { translateY }),
  };

  const transformStyle = Object.entries(transformProps).reduce(
    // I'm not sure about this issue, but everything is working as expected.
    // @ts-ignore Type '{ [x: string]: any; }[]' is not assignable
    // to type 'never[]'.
    // Type '{ [x: string]: any; }' is not assignable to type 'never'.ts(2322)
    (acc, currentValue) => [{ [currentValue[0]]: currentValue[1] }].concat(acc),
    [],
  );

  if (transformStyle.length === 0) return otherProps;
  return { ...otherProps, transform: transformStyle };
};
