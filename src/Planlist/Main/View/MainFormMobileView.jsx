import React from "react";
import { Container, Header, Input } from "semantic-ui-react";

const MainFormMobileView = ({ Media }) => {
  return (
    <div style={{ background: "#1b1c1d" }}>
      <Media at="mobile">
        <Container
          text
          textAlign="center"
          style={{ paddingTop: "1em", paddingBottom: "3em" }}
        >
          <Header
            as="h1"
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

export default MainFormMobileView;
