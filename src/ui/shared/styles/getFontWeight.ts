import { isAndroid, isIOS } from '../utils';

export enum FontWeight {
  WEIGHT_XLIGHT,
  WEIGHT_LIGHT,
  WEIGHT_NORMAL,
  WEIGHT_BOLD,
  WEIGHT_XBOLD,
}

type FontWeightValues =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const androidWeight: FontWeightValues[] = [];
androidWeight[FontWeight.WEIGHT_XLIGHT] = '100';
androidWeight[FontWeight.WEIGHT_LIGHT] = '300';
androidWeight[FontWeight.WEIGHT_NORMAL] = '400';
androidWeight[FontWeight.WEIGHT_BOLD] = '500';
androidWeight[FontWeight.WEIGHT_XBOLD] = '700';

const iosWeight: FontWeightValues[] = [];
iosWeight[FontWeight.WEIGHT_XLIGHT] = '100';
iosWeight[FontWeight.WEIGHT_LIGHT] = '300';
iosWeight[FontWeight.WEIGHT_NORMAL] = '400';
iosWeight[FontWeight.WEIGHT_BOLD] = '500';
iosWeight[FontWeight.WEIGHT_XBOLD] = '700';

const webWeight: FontWeightValues[] = [];
webWeight[FontWeight.WEIGHT_XLIGHT] = '200';
webWeight[FontWeight.WEIGHT_LIGHT] = '400';
webWeight[FontWeight.WEIGHT_NORMAL] = '500';
webWeight[FontWeight.WEIGHT_BOLD] = '700';
webWeight[FontWeight.WEIGHT_XBOLD] = '900';

const getFontWeight = (weight: FontWeight): FontWeightValues => {
  if (isAndroid) return androidWeight[weight];
  if (isIOS) return iosWeight[weight];
  return webWeight[weight];
};

export default getFontWeight;
