import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// import styled from 'styled-components';
// import Button from './Button';

/*
  Example of using a CSS variable to reuse props.theme values in multiple
  places. Also shows an example of styling a component (Button) inside another
  component (ButtonGroup).
*/
// const ButtonGroup = styled.div`
//   --border-radius: ${props => props.theme.borderRadius || 0};
//   display: flex;
//
//   ${Button} {
//     border-radius: 0;
//     font-size: .875em; /* TODO: remove once Grid with variable column widths completed  */
//
//     &:not(:first-of-type) {
//       border-left: 0;
//     }
//
//     &:first-of-type {
//       border-radius: var(--border-radius) 0 0 var(--border-radius);
//     }
//
//     &:last-of-type {
//       border-radius: 0 var(--border-radius) var(--border-radius) 0;
//     }
//   }
// `;

function ButtonGroup(props) {
  const { children } = props;

  const ButtonGroupTheme = {
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
  };

  return (
    <ThemeProvider theme={ButtonGroupTheme}>
      <div>
        {children}
      </div>
    </ThemeProvider>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
