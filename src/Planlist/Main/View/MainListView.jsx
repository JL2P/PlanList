import React from "react";
import { Grid, Segment, Card } from "semantic-ui-react";
import "./itemListStyle.css";

const MainListView = ({
  itemList,
  exampleItemComponent_1,
  exampleItemComponent_2,
  exampleItemComponent_3,
  exampleItemComponent_4,
}) => {
  //리스트를 뿌려줄때 전체 높이를 측정해서 넣어줘야할듯?

  return (
    <>
      <Segment
        style={{
          padding: "0em",
          marginTop: "2em",
          display: "flex",
          justifyContent: "center",
        }}
        vertical
      >
        <Grid
          // className="customContainer"
          container
          stackable
          verticalAlign="top"
          columns={3}
        >
          <Grid.Row>{itemList}</Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default MainListView;
