import React from "react";
import DetailCenterlContainer from "./Container/DetailCenterlContainer";
import DetailChattingContainer from "./Container/DetailChattingContainer";
import DetailProfileContainer from "./Container/DetailProfileContainer";

import { Container, Grid } from "semantic-ui-react";

const GroupDetailPage = ({ match, history }) => {
  const boxShadowRemove = { boxShadow: "none" };
  return (
    <div className="groupDetailWrap">
      <Container>
        <Grid celled style={boxShadowRemove}>
          <Grid.Row style={boxShadowRemove}>
            <Grid.Column width={4} style={boxShadowRemove}>
              <DetailProfileContainer history={history} />
            </Grid.Column>

            <Grid.Column width={8} style={boxShadowRemove}>
              <DetailCenterlContainer history={history} />
            </Grid.Column>

            <Grid.Column width={4} style={boxShadowRemove}>
              <DetailChattingContainer groupId={match.params.id} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default GroupDetailPage;
