import styled from 'styled-components';
import Button from './Button';
import { rem } from '../styles/Functions';

/*
  Example of using a CSS variable to reuse props.theme values in multiple
  places. Also shows an example of styling a component (Button) inside another
  component (ButtonGroup).
*/
const ButtonGroup = styled.div`
  --border-radius: ${props => rem(props.theme.borderRadius, 14) || 0};
  display: flex;

  ${Button} {
    font-size: ${rem(14)}; /* TODO: remove once Grid with variable column widths completed  */
    border-radius: 0;

    &:not(:first-of-type) {
      border-left: 0;
    }

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:last-of-type {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }
`;

export default ButtonGroup;
