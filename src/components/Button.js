import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { cond, stubTrue } from 'lodash';
import { has } from 'lodash/fp';
import { em } from './../styles/Functions';

const defaultStyles = props => ({
  backgroundColor: props.theme.color.accent,
  borderColor: props.theme.color.accent,
  color: props.theme.color.white,
});

const secondaryStyles = props => ({
  backgroundColor: props.theme.color.white,
  borderColor: props.theme.color.accent,
  color: props.theme.color.accent,
});

const disabledStyles = props => ({
  backgroundColor: props.theme.color.disabled,
  borderColor: props.theme.color.disabled,
  color: props.theme.color.white,
});

const getContextStyles = cond([
  [has('secondary'), secondaryStyles],
  [has('disabled'), disabledStyles],
  [stubTrue, defaultStyles],
]);

const Button = styled.button.attrs({
  style: props => getContextStyles(props),
})`
  ${props => props.style};
  cursor: pointer;
  font-size: ${props => em(props.theme.font.size[props.size])};
  border: 2px solid;
  border-radius: ${props => em(props.theme.borderRadius)};
  font-weight: bold;
  padding: ${em(16)} ${em(32)};
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
  }

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
