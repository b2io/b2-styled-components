import styled, { css } from 'styled-components';
import { em } from './../styles/Functions';

const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  border-color: ${props => props.theme.bg || '#ccc'};
  border-radius: ${props => props.theme.borderRadius || '0'};
`;

const Image = styled.img`
  ${Template}; /* call our "mixin" */
  border-width: ${em(6)};
  border-style: solid;

  .example & { /* example of reverse selector model for context styling */
    border-style: double;
  }
`;

export default Image;
