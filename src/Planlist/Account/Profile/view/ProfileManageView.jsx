import React from "react";
import { Container, Header, Image, Grid, Item } from "semantic-ui-react";

const ProfileManageView = () => {
  return (
    <Container text style={{ marginTop: "5em" }}>
      <Item.Group>
        <Item>
          <Item.Image
            size="small"
            circular
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <Grid columns={4} style={{ marginTop: "7em" }}>
        <Grid.Row stretched>
          <Grid.Column>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="medium"
              circular
            />
          </Grid.Column>
          <Grid.Column>
            <p>유저 아이디</p>
            <p>todo 몇개</p>
          </Grid.Column>
          <Grid.Column>
            <p>내 정보 수정</p>
            <p>팔로워</p>
          </Grid.Column>
          <Grid.Column>
            <p>설정?</p>
            <p>팔로우</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Header as="h1">This is ProfileManageView</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for
        single column layouts.
      </p> */}
    </Container>
  );
};

export default ProfileManageView;
