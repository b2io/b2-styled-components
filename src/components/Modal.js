import styled from 'styled-components';
import { em, rem, z } from '../styles/Functions';

const Modal = styled.div`
  border: 2px solid ${props => props.theme.color.black};
  display: block;
  font-size: ${props => rem(props.theme.font.size.base)};
  left: 50%;
  padding: ${em(16)} ${em(32)};
  text-align: center;
  transform: translateX(-50%);
  ${z('modal', 'absolute')};
`;

export default Modal;
