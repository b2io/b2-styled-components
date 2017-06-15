import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => ((props.theme.fg) || '#000')};
  margin: 1em auto;
  max-width: 1200px;
`;

export default Title;
