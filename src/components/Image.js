import styled, { css } from 'styled-components';
import { em } from './../styles/Functions';

const Template = css`
  /* use prop from assigned theme or fallback to a set value */
  border-color: ${props => props.theme.color.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

const Image = styled.img`
  ${Template}; /* call our "mixin" */
  border-width: ${em(6)};
  border-style: solid;
`;

export default Image;
