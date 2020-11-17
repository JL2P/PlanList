import React from "react";
import { Card, Image, Grid, Modal } from "semantic-ui-react";
import DetailGroupAllListModal from "./DetailGroupAllListModal";
import "../../../GroupStyle/Group.scss";
import GroupTodoCommentFrame from "./DetailGroupComment/GroupTodoCommentFrame";

const DetailGroupAllList = ({
  item,
  seletedTodoComments,
  loginAccount,
  onDeleteComment,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Grid.Column className="recommendGroup_column">
          <Card className="group_card" raised>
            <Image src={item.imgUrl} className="Group_img" />
            <Card.Content>
              <Card.Header className="group_Card_header">
                {item.title}
              </Card.Header>
              <Card.Description>
                참여한 멤버 수 : {item.rating}명
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      }
    >
      <DetailGroupAllListModal
        loginAccount={loginAccount}
        setOpen={setOpen}
        groupTodo={item}
      >
        <GroupTodoCommentFrame
          comments={seletedTodoComments}
          loginAccount={loginAccount}
          onDeleteComment={onDeleteComment}
        />
      </DetailGroupAllListModal>
    </Modal>
  );
};

export default React.memo(DetailGroupAllList);
