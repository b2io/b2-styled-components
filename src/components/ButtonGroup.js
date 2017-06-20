import styled from 'styled-components';
import Button from './Button';
import { rem } from '../styles/Functions';

const ButtonGroup = styled.div`
  --border-radius: ${props => rem(props.theme.borderRadius, 14)};
  display: flex;
  font-size: ${props => rem(props.theme.font.size.base)};

  ${Button} {
    border-radius: 0;

    &:not(:first-of-type) {
      border-left: 0;
    }

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    &:last-of-type {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }
`;

export default ButtonGroup;
