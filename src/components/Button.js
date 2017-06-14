import styled, { css } from 'styled-components';
import ButtonGroup from './ButtonGroup';
/*
here's an example of advanced interpolation using css helper
the template as interpolation to arrive at values and then the whole
thing is able to be interpolated later in our css (like a mixin)
*/
const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  background-color: ${props => ((props.theme.bg) || 'transparent')}; /* theme.bg or 'transparent' */
  border: 2px solid ${props => ((props.theme.fg) || '#000')}; /* theme.fg or black */
  color: ${props => ((props.theme.fg) || '#000')}; /* theme.fg or black */
`;

const Button = styled.button`
  ${Template}; /* call our "mixin" */
  border-radius: 6px;
  font-size: 1em;
  font-weight: bold;
  padding: 1em 2em;
  text-transform: uppercase;

  &:focus {
    z-index: 1;
  }

  ${ButtonGroup} & {
    --border-radius: ${props => props.theme.borderRadius || 0};
    font-size: .875em; /* TODO: remove once Grid with variable column widths completed  */
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

export default Button;
