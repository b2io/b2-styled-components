import { isNil, stripUnits } from './Util';

const pxTo = type => (pixelValue, context = 16) => {
  if (isNil(pixelValue)) return pixelValue;

  return `${stripUnits(pixelValue) / stripUnits(context)}${type}`;
};

export const em = pxTo('em');
export const rem = pxTo('rem');
