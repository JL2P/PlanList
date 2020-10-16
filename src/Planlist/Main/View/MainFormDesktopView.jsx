import React from "react";

import { Container, Header, Input } from "semantic-ui-react";

const MainFormDesktopView = ({ Media }) => {
  return (
    <div style={{ background: "#1b1c1d" }}>
      <Media greaterThan="mobile">
        <Container
          text
          textAlign="center"
          style={{ paddingTop: "1em", paddingBottom: "3.5em" }}
        >
          <Header
            as="h1"
            content="The Plan It"
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              color: "white",
            }}
          />
          <Header
            as="h5"
            content="Put your plan into action."
            style={{
              fontSize: "1.5em",
              fontWeight: "normal",
              color: "white",
            }}
          />
          <Input fluid icon="write" placeholder="Write what to do today" />
        </Container>
      </Media>
    </div>
  );
};

export default MainFormDesktopView;
