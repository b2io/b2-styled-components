import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Primary, Secondary } from '../styles/Themes';

function ThemedSection(props) {
  const { children, theme } = props;
  const ActiveTheme = theme === 'secondary' ? Secondary : Primary;
  return (
    <ThemeProvider theme={ActiveTheme}>{children}</ThemeProvider>
  );
}

ThemedSection.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf([Secondary, Primary]),
};

ThemedSection.defaultProps = {
  theme: Primary,
};

export default ThemedSection;
