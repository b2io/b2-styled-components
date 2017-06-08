import styled from 'styled-components';
import Color from '../styles/Color';

const Title = styled.h1`
  color: ${props => ((props.theme.fg) || Color.accent)};
  max-width: 1200px;
  margin: 1em auto;
`;

export default Title;
