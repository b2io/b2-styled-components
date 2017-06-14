import styled, { css } from 'styled-components';

const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  color: ${props => ((props.theme.bg) || 'blue')}; /* theme.fg or black */

  &:hover {
    color: ${props => ((props.theme.fg) || 'orange')}; /* theme.fg or black */
    background-color: ${props => ((props.theme.bg) || 'transparent')}; /* theme.bg or 'transparent' */
  }
`;

const Anchor = styled.a`
  ${Template}; /* call our "mixin" */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  .example & { /* example of reverse selector model for context styling */
    font-style: italic;

    &:hover {
      border-bottom: 1px dotted;
      text-decoration: none;
    }
  }
`;

export default Anchor;
