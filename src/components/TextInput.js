import styled from 'styled-components';

const TextInput = styled.input`
  background-color: ${props => props.theme.color.white};
  border: 2px solid ${props => props.theme.color.black};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.color.text};
  font-size: ${props => props.theme.font.size.base};
  margin: 1em;
  padding: .25em;

  &::placeholder {
    font-style: italic;
  }
`;

export default TextInput;
