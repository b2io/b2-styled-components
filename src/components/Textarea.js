import styled from 'styled-components';

const Textarea = styled.textarea`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-size: 1em;
  margin: 1em;
  padding: .25em;
  border: 2px solid ${props => props.theme.color};
  border-radius: 3px;

  &::placeholder {
    font-style: italic;
  }
`;

export default Textarea;
