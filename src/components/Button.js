import styled, { css } from 'styled-components';

/*
here's an example of advanced interpolation using css helper
the template as interpolation to arrive at values and then the whole
thing is able to be interpolated later in our css (like a mixin)
*/
const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  background-color: ${props => ((props.theme.bg) || 'transparent')}; /* theme.bg or 'transparent' */
  border-bottom: ${props => ((props.theme.borderBottom) || '2px solid #000')}; /* theme.fg or black */
  border-left: ${props => ((props.theme.borderLeft) || '2px solid #000')}; /* theme.fg or black */
  border-right: ${props => ((props.theme.borderRight) || '2px solid #000')}; /* theme.fg or black */
  border-top: ${props => ((props.theme.borderTop) || '2px solid #000')}; /* theme.fg or black */
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

  .example & { /* example of reverse selector model for context styling */
    border-radius: 0;
  }
`;

export default Button;
