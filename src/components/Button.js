import styled, { css } from 'styled-components';
import { cond, stubTrue } from 'lodash';
import { em } from './../styles/Functions';

const template = props => css`
  background-color: ${props.theme.color.accent};
  color: ${props.theme.color.white};
  font-size: ${em(props.theme.font.size.base)};
`;

const small = props => css`
  background-color: ${props.theme.color.accent};
  color: ${props.theme.color.white};
  font-size: ${em(props.theme.font.size.small)};
`;

const secondary = props => css`
  background-color: ${props.theme.color.accent};
  color: ${props.theme.color.white};
  font-size: ${em(props.theme.font.size.base)};
`;

// TODO: look at branch
const contextToStyles = props => cond([
  [() => props.small, small],
  [() => props.secondary, secondary],
  [stubTrue, template],
])(props);

const Button = styled.button.attrs({
  style: props => contextToStyles(props),
})`
  ${props => props.style};
  border: 2px solid ${props => props.theme.color.white};
  border-radius: ${props => em(props.theme.borderRadius)};
  font-weight: bold;
  padding: ${em(16)} ${em(32)};
  text-transform: uppercase;

  &:focus {
    z-index: 1;
  }
`;

export default Button;
