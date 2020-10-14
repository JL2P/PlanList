import React from "react";
import { Grid, Card } from "semantic-ui-react";

const MainItemGroupView = ({ items }) => {
  return (
    <Grid.Column>
      <Card.Group>{items}</Card.Group>
    </Grid.Column>
  );
};

export default MainItemGroupView;
