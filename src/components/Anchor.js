import styled, { css } from 'styled-components';

const Template = css`
  color: ${props => props.theme.color.accent};
  font-size: ${props => props.theme.font.size.base};

  &:hover {
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.accent};
  }
`;

const Anchor = styled.a`
  ${Template}; /* call our "mixin" */
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Anchor;
