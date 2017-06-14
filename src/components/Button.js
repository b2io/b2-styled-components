import styled, { css } from 'styled-components';
import { em } from './../styles/Functions';

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
  border-radius: ${em(6)};
  font-size: ${em(16)};
  font-weight: bold;
  padding: ${em(16)} ${em(32)};
  text-transform: uppercase;

  &:focus {
    z-index: 1;
  }

  .example & { /* example of reverse selector model for context styling */
    border-radius: 0;
  }
`;

export default Button;
