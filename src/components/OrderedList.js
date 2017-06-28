import styled from 'styled-components';

const OrderedList = styled.ol`
  li {
    font-family: ${props => props.theme.font.family.base};
    list-style-type: ${props => props.theme.bullet.ordered};
  }
`;

export default OrderedList;
