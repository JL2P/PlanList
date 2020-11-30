import React, { useState } from "react";
import DetailGroupAllModal from "./DetailGroupAllModal";
import { Segment, Input, Modal, Grid } from "semantic-ui-react";
import "../../../GroupStyle/GroupDetail.scss";
import GroupTodoContainer from "../../Container/GroupTodoContainer";
import DetailGroupPrivate from "./DetailGroupPrivate";
import DetailGroupNoTodoM from "./DetailGroupNoTodoM";
import DetailGroupNoTodoU from "./DetailGroupNoTodoU";
import DetailGroupAllSearch from "./DetailGroupAllSearch";

const DetailGroupAll = ({
  onDetailGroup_create,
  getDetailGroup_modalOpen,
  onDetailGroup_modalCheck,
  onLogInUser,
  group,
  groupTodos,
  categoryList,
  member,
}) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const onAlert = () => {
    alert("글 쓰기 권한이 없습니다.");
  };

  // 이부분 부터 그룹 투두에 대한 부분을 만들어주는거같음.
  const Groupitem = groupTodos.map((item, index) => (
    // 승훈 수정
    <GroupTodoContainer key={index} item={item} />
  ));
  return (
    <div>
      {group.openAt === "true" ||
      member.confirm === "true" ? (
        // 그룹 공개 여부가 true일 때 || 멤버 그룹id 와 그룹id가 일치할 때 (공개)
        <div>
          <Segment>
            <DetailGroupAllSearch  groupTodos={groupTodos} />
            {/* <Input
              icon={{ name: "search", circular: true, link: true }}
              placeholder="작성자, 게시물을 입력해주세요."
              style={{ width: "100%" }}
              value={search}
              onChange={onSearch}
            /> */}
          </Segment>

          <Segment>
            {group.master === onLogInUser.accountId ? (
              <Modal
                closeIcon
                open={getDetailGroup_modalOpen}
                size="tiny"
                trigger={
                  <div>
                    <Input
                      placeholder="새로운 계획을 시작해 보세요!"
                      style={{ width: "100%" }}
                      className="detailGroup_create_input"
                      icon={{
                        name: "write square",
                        circular: true,
                        link: true,
                      }}
                    />
                  </div>
                }
                onClose={() => onDetailGroup_modalCheck(false)}
                onOpen={() => onDetailGroup_modalCheck(true)}
              >
                <DetailGroupAllModal
                  onDetailGroup_create={onDetailGroup_create}
                  group={group}
                  onLogInUser={onLogInUser}
                  categoryList={categoryList}
                />
              </Modal>
            ) : (
              <Input
                placeholder="새로운 계획을 시작해 보세요!"
                style={{ width: "100%" }}
                className="detailGroup_create_input"
                icon={{ name: "write square", circular: true, link: true }}
                onClick={onAlert}
                readOnly
              />
            )}
          </Segment>

          <Segment>
            <Grid columns={2} divided style={{ margin: "-0.5rem" }}>
              {group.groupTodos[0] ? (
                <Grid.Row>{Groupitem}</Grid.Row>
              ) : (
                <>
                  {/* 그룹투두가 없을 때 사용자에 따른 화면 */}
                  {member.manager === "true" ? (
                    <Modal
                      closeIcon
                      open={getDetailGroup_modalOpen}
                      size="tiny"
                      trigger={
                        <div style={{ width: "100%" }}>
                          <DetailGroupNoTodoM />
                        </div>
                      }
                      onClose={() => onDetailGroup_modalCheck(false)}
                      onOpen={() => onDetailGroup_modalCheck(true)}
                    >
                      <DetailGroupAllModal
                        onDetailGroup_create={onDetailGroup_create}
                        group={group}
                        onLogInUser={onLogInUser}
                        categoryList={categoryList}
                      />
                    </Modal>
                  ) : (
                    <DetailGroupNoTodoU />
                  )}
                </>
              )}
            </Grid>
          </Segment>
        </div>
      ) : (
        // 그룹 공개 여부가 false일 때 (비공개)
        <DetailGroupPrivate />
      )}
    </div>
  );
};

export default DetailGroupAll;
