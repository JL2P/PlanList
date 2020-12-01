import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, List, Header } from "semantic-ui-react";

const DetailChattingView = ({ groupRanks }) => {
  const TopThreeRankComponent = () => {
    return groupRanks.map((groupRank, idx) => {
      return (
        <List.Item key={groupRank.accountId}>
          <Link to={`/account/${groupRank.accountId}`}>
            <List.Content>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {idx < 3 && (
                    <Image
                      src={`/images/badge/crown_${idx + 1}.png`}
                      alt="crown"
                      style={{
                        width: "25px",
                        height: "25px",
                        marginRight: "0.5em",
                      }}
                    />
                  )}
                  <Header>{groupRank.accountId}</Header>
                </div>
                <Header color="red">{groupRank.total}</Header>
              </div>
            </List.Content>
          </Link>
        </List.Item>
      );
    });
  };

  return (
    <Card>
      <Card.Content style={{ cursor: "pointer" }}>
        <h3 style={{ marginBottom: "0", display: "inline-block" }}>
          {" "}
          Group Ranking
        </h3>
      </Card.Content>

      <>
        <Card.Content>
          <Header>BEST3</Header>
          <List selection verticalAlign="middle">
            {TopThreeRankComponent()}
          </List>
        </Card.Content>
      </>
    </Card>
  );
};

export default DetailChattingView;
