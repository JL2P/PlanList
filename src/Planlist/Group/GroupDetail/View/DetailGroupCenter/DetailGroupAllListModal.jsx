import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";

const DetailGroupAllListModal = ({
  loginAccount,
  setOpen,
  groupTodo,
  onAttendGroupTodo,
  onLikeButton,
  attendAt,
  children,
}) => {
  const onLike = () => {
    //좋아요 상태면 좋아요 삭제
    //좋아요 상태가 아니면 좋아요 추가
    const action = groupTodo.likeState === false ? "ADD" : "DELETE";

    onLikeButton(action);
  };

  return (
    <>
      <Modal.Header>그룹 계획</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={groupTodo.imgUrl}
          wrapped
          style={{ maxHeight: "360px" }}
        />

        <div className="modal__description">
          <Modal.Description>
            <Header>{groupTodo.title}</Header>
            <p>{groupTodo.description}</p>
          </Modal.Description>
          <div>
            <div className="modal__description__info">
              <Link to={`/account/${groupTodo.writer}`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={groupTodo.imgUrl}
                    bordered
                    centered
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "21px",
                      marginLeft: "0.5em",
                      marginRight: "0.5em",
                      marginBottom: "0.3em",
                    }}
                  >
                    {groupTodo.writer}
                  </span>
                </div>
              </Link>
              <Button
                style={{ padding: "1em", background: "#ffffff" }}
                onClick={() => {
                  onLike();
                }}
              >
                <Icon
                  name="heart"
                  size="large"
                  color={groupTodo.likeState === true ? "red" : "black"}
                  style={{
                    marginBottom: "0.2em",
                  }}
                />{" "}
                <b
                  style={{
                    fontSize: "16px",
                    marginRight: "0.2em",
                  }}
                >
                  {groupTodo.likePoint}
                </b>
              </Button>
            </div>

            {attendAt && (
              <Button
                fluid
                style={{
                  marginTop: "0.5em",
                }}
                onClick={() => {
                  onAttendGroupTodo("CANCEL");
                }}
              >
                계획 참여 취소하기
              </Button>
            )}
            {!attendAt && (
              <Button
                fluid
                style={{
                  marginTop: "0.5em",
                  background: "#ffb517",
                  color: "#ffffff",
                }}
                onClick={() => {
                  onAttendGroupTodo("ATTEND");
                }}
              >
                계획 참여하기
              </Button>
            )}
          </div>
        </div>
      </Modal.Content>

      {children}

      {/* 내가 작성한 Todo만 삭제가능 */}
      {loginAccount.accountId === groupTodo.writer && (
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            수정
          </Button>
          <Button color="red" onClick={() => setOpen(false)}>
            삭제
          </Button>
        </Modal.Actions>
      )}
    </>
  );
};

export default DetailGroupAllListModal;
