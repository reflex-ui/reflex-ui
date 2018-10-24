import { InteractivityType } from '@reflex-ui/core';
import { ElevationDegree } from './ElevationDegree';

export const convertInteractivityToElevation = (
  interactivityType: InteractivityType,
  degree: ElevationDegree,
) => {
  let elevation = 0;
  if (interactivityType === InteractivityType.ENABLED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 2;
    } else if (degree === ElevationDegree.MID) {
      elevation = 6;
    } else {
      elevation = 10;
    }
  } else if (
    interactivityType === InteractivityType.FOCUSED ||
    interactivityType === InteractivityType.HOVERED
  ) {
    if (degree === ElevationDegree.LOW) {
      elevation = 4;
    } else if (degree === ElevationDegree.MID) {
      elevation = 8;
    } else {
      elevation = 14;
    }
  } else if (interactivityType === InteractivityType.PRESSED) {
    if (degree === ElevationDegree.LOW) {
      elevation = 8;
    } else if (degree === ElevationDegree.MID) {
      elevation = 12;
    } else {
      elevation = 20;
    }
  }

  return elevation;
};
