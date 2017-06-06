import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

function ThemedSection(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
  );
}

ThemedSection.propTypes = {
  children: PropTypes.node.isRequired,
};

ThemedSection.defaultProps = {
  theme: Theme,
};

export default ThemedSection;
