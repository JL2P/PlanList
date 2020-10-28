import React from "react";
import { Grid } from "semantic-ui-react";
import "./itemListStyle.css";

const MainListView = ({ itemList }) => {
  //리스트를 뿌려줄때 전체 높이를 측정해서 넣어줘야할듯?

  return (
    <div
      style={{
        minHeight: "600px",
        padding: "0em",
        marginTop: "2em",
        display: "flex",
        justifyContent: "center",
      }}
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
    </div>
  );
};

export default MainListView;
