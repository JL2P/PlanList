import React from "react";
import { Card, Grid, Icon, Modal } from "semantic-ui-react";
import NewGroupItemModal from "./NewGroupItemModal";
import "../../../GroupStyle/Group.scss";

const NewGroupItem = ({categoryList,onCreateGroup,onLogInUser}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="tiny"
      trigger={
        <Grid.Column className="recommendGroup_column">
          <Card className="group_card, Newgroup_card" raised>
            <Icon name='add circle' className="Newgroup_circle" />
            <Card.Header className="group_Card_header">그룹 만들기</Card.Header>
          </Card>
        </Grid.Column>
        
      }
    >
      <NewGroupItemModal 
        setOpen={setOpen} 
        categoryList={categoryList}
        onCreateGroup={onCreateGroup}
        onLogInUser={onLogInUser}
      />
    </Modal>
  );
};

export default React.memo(NewGroupItem);
