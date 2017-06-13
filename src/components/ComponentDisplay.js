import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Title } from '../components';

function ComponentDisplay(props) {
  const { children, title } = props;
  return (
    <div>
      {title &&
        <Title>{title}</Title>
      }
      <Grid>{children}</Grid>
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
