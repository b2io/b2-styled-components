import styled, { css } from 'styled-components';
import { em } from './../styles/Functions';

const Template = css`
  background-color: ${props => props.theme.color.accent};
  border: 2px solid ${props => props.theme.color.white};
  border-radius: ${props => em(props.theme.borderRadius)};
  color: ${props => props.theme.color.white};
  font-size: ${props => em(props.theme.font.size.base)};
`;

const Button = styled.button`
  ${Template}; /* call our "mixin" */
  font-weight: bold;
  padding: ${em(16)} ${em(32)};
  text-transform: uppercase;

  &:focus {
    z-index: 1;
  }
`;

export default Button;
