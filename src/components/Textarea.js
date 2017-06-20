import styled from 'styled-components';

const Textarea = styled.textarea`
  background-color: ${props => props.theme.color.white};
  border: 2px solid ${props => props.theme.color.black};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.color.text};
  font-size: ${props => props.theme.font.size.base};
  margin: 1em;
  padding: .25em;
`;

export default Textarea;
