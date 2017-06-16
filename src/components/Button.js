import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { cond, stubTrue } from 'lodash';
import { em } from './../styles/Functions';

const template = props => ({
  backgroundColor: props.theme.color.accent,
  borderColor: props.theme.color.accent,
  color: props.theme.color.white,
});

const secondary = props => ({
  backgroundColor: props.theme.color.white,
  borderColor: props.theme.color.accent,
  color: props.theme.color.accent,
});

const disabled = props => ({
  backgroundColor: props.theme.color.disabled,
  borderColor: props.theme.color.disabled,
  color: props.theme.color.white,
});

const contextToStyles = props => cond([
  [() => props.secondary, secondary],
  [() => props.disabled, disabled],
  [stubTrue, template],
])(props);

const Button = styled.button.attrs({
  style: props => contextToStyles(props),
})`
  ${props => props.style};
  font-size: ${props => em(props.theme.font.size[props.size])};
  border: 2px solid;
  border-radius: ${props => em(props.theme.borderRadius)};
  font-weight: bold;
  padding: ${em(16)} ${em(32)};
  text-transform: uppercase;

  &:focus {
    z-index: 1;
  }
`;

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'large', 'base']),
};

Button.defaultProps = {
  size: 'base',
};

export default Button;
