import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.color.primary};
  font-family: ${props => props.theme.font.family.base};
  margin: 1em auto;
  max-width: 1200px;
`;

export default Title;
