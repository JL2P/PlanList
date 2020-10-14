import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";

class MainItemGroupView extends Component {
  render() {
    //ref는 클래스형 컴포넌트만 가능하다
    const { columnRef, items } = this.props;
    return (
      <Grid.Column>
        <div className="test" ref={columnRef}>
          <Card.Group>{items}</Card.Group>
        </div>
      </Grid.Column>
    );
  }
}

export default MainItemGroupView;
