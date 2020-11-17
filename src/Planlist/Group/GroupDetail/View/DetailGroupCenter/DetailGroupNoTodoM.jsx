import React from 'react';
import { Header, Icon } from "semantic-ui-react";

const DetailGroupNoTodoM = () => {
    return (
        <div
            style={{
                minWidth: "100%",
                minHeight: "400px",
                padding: "0em",
                marginTop: "2em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Header
                as="h1"
                icon
                onClick={() => {
                    console.log("testse");
                }}
            >
                <Icon name="play" />
                <Header>계획 생성하기</Header>
                <Header.Subheader>
                현재 진행중인 계획이 존재하지 않습니다. 계획을 생성해보세요.
                </Header.Subheader>
            </Header>
        </div>
    );
};

export default DetailGroupNoTodoM;