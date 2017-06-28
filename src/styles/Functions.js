import { css } from 'styled-components';
import { isNil } from 'lodash';
import { stripUnits } from './Util';

const pxTo = type => (pixelValue, context = 16) => {
  if (isNil(pixelValue)) return pixelValue;

  return `${stripUnits(pixelValue) / stripUnits(context)}${type}`;
};

const layers = {
  modal: '9000',
  overlay: '8000',
  tray: '7000',
  header: '6000',
  footer: '5000',
};

export const z = (layer, position = 'relative') => css`
  z-index: ${layers[layer]};
  position: ${position};
`;

export const em = pxTo('em');
export const rem = pxTo('rem');
