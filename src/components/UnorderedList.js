import styled from 'styled-components';

const UnorderedList = styled.ul`
  li {
    font-family: ${props => props.theme.font.family.base};
    list-style-type: ${props => props.theme.bullet.unordered};
  }
`;

export default UnorderedList;
