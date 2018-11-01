import { isAndroid, isIOS } from '../../utils';
import { FontWeight } from './FontWeight';
import { FontWeightValues } from './FontWeightValues';

const androidWeight: FontWeightValues[] = [];
androidWeight[FontWeight.LIGHT] = '300';
androidWeight[FontWeight.REGULAR] = '400';
androidWeight[FontWeight.MEDIUM] = '500';
androidWeight[FontWeight.BOLD] = '700';

const iosWeight: FontWeightValues[] = [];
iosWeight[FontWeight.LIGHT] = '300';
iosWeight[FontWeight.REGULAR] = '400';
iosWeight[FontWeight.MEDIUM] = '500';
iosWeight[FontWeight.BOLD] = '700';

const webWeight: FontWeightValues[] = [];
webWeight[FontWeight.LIGHT] = '300';
webWeight[FontWeight.REGULAR] = '400';
webWeight[FontWeight.MEDIUM] = '500';
webWeight[FontWeight.BOLD] = '700';

export const getFontWeight = (weight: FontWeight): FontWeightValues => {
  if (isAndroid) return androidWeight[weight];
  if (isIOS) return iosWeight[weight];
  return webWeight[weight];
};
