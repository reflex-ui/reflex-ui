import merge from 'lodash/merge';
import * as React from 'react';
import { Styled } from '../components/Styled';

export const cloneElement = ({
  element,
  props = {},
}: {
  element: React.ReactElement<Styled>;
  props: Styled;
}) => {
  if (!element.props) element.props = {};
  const { style: elementStyle, ...otherElementProps } = element.props;
  props.style = props.style ? [props.style] : [];
  if (elementStyle) props.style.push(elementStyle);
  return React.cloneElement(element, merge({}, props, otherElementProps));
};
