const defaultTheme = {
  borderRadius: {
    base: '6px',
  },

  color: {
    accent: 'rgba(159, 4, 27, .6)',
    primary: '#7986cb',
    secondary: '#4dd0e1',
    warn: '#e53935',
    caution: 'yellow',
    disabled: 'gray',
    hover: '',
    grey: {
      1: '#333',
      2: '#666',
    },
    black: '#000',
    white: '#fff',
  },

  font: {
    family: {
      base: 'Arial, sans-serif',
      accent: 'Times New Roman, serif',
    },
    size: {
      base: '16px',
    },
  },

  zindex: {
    modal: 9000,
    overlay: 8000,
    tray: 7000,
    header: 6000,
    footer: 5000,
  },
};

export default defaultTheme;
