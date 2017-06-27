import styled from 'styled-components';
import { em, rem, z } from '../styles/Functions';

const Modal = styled.div`
  border: 2px solid ${props => props.theme.color.black};
  --border-radius: var(--border-radius);
  display: block;
  font-size: ${props => rem(props.theme.font.size.base)};
  padding: ${em(16)} ${em(32)};
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  ${z('modal', 'absolute')};
`;

export default Modal;
