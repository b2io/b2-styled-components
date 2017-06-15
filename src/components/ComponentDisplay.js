import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../components';

const Box = styled.div`
  border-bottom: 1px dotted #000;
  margin: 0 auto;
  min-height: 150px;
  max-width: 1200px;

  > * {
    margin-bottom: 10px;
  }
`;

function ComponentDisplay(props) {
  const { children, title } = props;
  return (
    <div>
      {title &&
        <Title>{title}</Title>
      }
      <Box>{children}</Box>
    </div>
  );
}

ComponentDisplay.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

ComponentDisplay.defaultProps = {
  title: null,
};

export default ComponentDisplay;
