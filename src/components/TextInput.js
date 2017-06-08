import styled, { css } from 'styled-components';

/*
here's an example of advanced interpolation using css helper
the template as interpolation to arrive at values and then the whole
thing is able to be interpolated later in our css (like a mixin)
*/
const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  background-color: ${props => ((props.theme.fg) || 'transparent')}; /* theme.bg or 'transparent' */
  border: 2px solid ${props => ((props.theme.bg) || '#000')}; /* theme.fg or black */
  color: ${props => ((props.theme.bg) || '#000')}; /* theme.fg or black */
`;

const TextInput = styled.input`
  ${Template}; /* call our "mixin" */
  border-radius: 6px;
  font-size: 1em;
  margin: 1em;
  padding: .25em;

  &::placeholder {
    font-style: italic;
  }

  .example & { /* example of reverse selector model for context styling */
    border-radius: 0;
    margin: 0;
  }
`;

export default TextInput;
