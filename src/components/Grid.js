import styled from 'styled-components';

/* TODO: Convert to a flexible Grid component */
const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto;
  max-width: 1200px;

  > * {
    border: 1px dotted #000;
    padding: 1em;
  }
`;

export default Grid;
