import styled from 'styled-components';
import Button from './Button';
import { rem } from '../styles/Functions';

const ButtonGroup = styled.div`
  --border-radius: ${props => rem(props.theme.borderRadius, 14)};
  display: flex;
  font-size: ${props => rem(props.theme.font.size.base)};

  ${Button} {
    border-radius: 0;
    border-left: 1px solid ${props => props.theme.color.white};
    border-right: 1px solid ${props => props.theme.color.white};

    &:not(:first-of-type) {
      border-left: 0;
    }

    &:first-of-type {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      border-left: none;
    }

    &:last-of-type {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      border-right: none;
    }
  }
`;

export default ButtonGroup;
