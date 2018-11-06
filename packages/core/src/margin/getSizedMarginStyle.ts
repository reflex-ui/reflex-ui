import { SizedMarginStyleGetter } from './SizedMarginStyleGetter';

export const getSizedMarginStyle: SizedMarginStyleGetter = sizedStyle => ({
  margin: m,
  marginBottom: mB,
  marginEnd: mE,
  marginHorizontal: mH,
  marginStart: mS,
  marginTop: mT,
  marginVertical: mV,
}) => ({
  ...(m ? sizedStyle[m] : {}),
  ...(mH ? { marginHorizontal: sizedStyle[mH].marginHorizontal } : {}),
  ...(mV ? { marginVertical: sizedStyle[mV].marginVertical } : {}),
  ...(mS ? { marginStart: sizedStyle[mS].marginHorizontal } : {}),
  ...(mE ? { marginEnd: sizedStyle[mE].marginHorizontal } : {}),
  ...(mT ? { marginTop: sizedStyle[mT].marginVertical } : {}),
  ...(mB ? { marginBottom: sizedStyle[mB].marginVertical } : {}),
});
