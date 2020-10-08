import React, { Component } from "react";
import { Container, Header, Image, Grid, Item } from "semantic-ui-react";

const ProfileManageView = () => {
  let pHeight = "20px";
  let pText = "20px";

  return (
    <Container text style={{ marginTop: "3em" }}>
      <Grid celled="internally" stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src="/profiles/hungry.png" size="medium" bordered circular />
          </Grid.Column>
          <Grid.Column width={5}>
            <Grid.Row style={{ fontSize: "30px" }}> eunsongsong</Grid.Row>
            <div style={{ fontSize: pText }}>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row style={{ fontSize: "30px" }}>&nbsp;</Grid.Row>
            <div style={{ fontSize: pText }}>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row style={{ fontSize: "30px" }}>&nbsp;</Grid.Row>
            <div style={{ fontSize: pText }}>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
              <Grid.Row style={{ paddingTop: pHeight }}>hello</Grid.Row>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ProfileManageView;
