import React from "react";
import { Card, Image, Grid, Modal } from "semantic-ui-react";
import DetailGroupAllListModal from "./DetailGroupAllListModal";
import "../../../GroupStyle/Group.scss";
import GroupTodoCommentFrame from "./DetailGroupComment/GroupTodoCommentFrame";

const DetailGroupAllList = ({
  groupTodo,
  selectedGroupTodo,
  selectedTodoComments,
  loginAccount,
  onDeleteComment,
  onAttendGroupTodo,
  onLikeButton,
  attendAt,
}) => {
  const [open, setOpen] = React.useState(false);

  const onOpenModal = () => {
    selectedGroupTodo(groupTodo);
    setOpen(true);
  };

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => onOpenModal()}
      open={open}
      size="small"
      trigger={
        <Grid.Column className="recommendGroup_column">
          <Card className="group_card" raised>
            <Image
              src={
                groupTodo.galleries.length > 0
                  ? groupTodo.galleries[0].filePath
                  : groupTodo.imgUrl
              }
              className="Group_img"
            />
            <Card.Content>
              <Card.Header className="group_Card_header">
                {groupTodo.title}
              </Card.Header>
              <Card.Description>
                참여한 멤버 수 : {groupTodo.members.length}명
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      }
    >
      <DetailGroupAllListModal
        groupTodo={groupTodo}
        loginAccount={loginAccount}
        setOpen={setOpen}
        onAttendGroupTodo={onAttendGroupTodo}
        onLikeButton={onLikeButton}
        attendAt={attendAt}
      >
        <GroupTodoCommentFrame
          comments={selectedTodoComments}
          loginAccount={loginAccount}
          onDeleteComment={onDeleteComment}
        />
      </DetailGroupAllListModal>
    </Modal>
  );
};

export default React.memo(DetailGroupAllList);
