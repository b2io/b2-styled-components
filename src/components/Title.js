import styled from 'styled-components';
import Color from '../styles/Color';

const Title = styled.h1`
  color: ${props => ((props.theme.fg) || Color.accent)};
  margin: 1em auto;
  max-width: 1200px;
`;

export default Title;
