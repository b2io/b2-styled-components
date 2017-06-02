import chromatism from 'chromatism';

const Palette = {
  color1: '#2BC0E4',
  color2: '#EAECC6',
};

const Color = {
  primary: Palette.color1,
  secondary: Palette.color2,
  primaryFG: `${chromatism.contrastRatio(Palette.color1).hex}`,
  secondaryFG: `${chromatism.contrastRatio(Palette.color2).hex}`,
};

export default Color;
