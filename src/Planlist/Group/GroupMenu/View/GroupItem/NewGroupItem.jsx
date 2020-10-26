import React from "react";
import { Card, Image, Icon, Button, Header, Modal } from "semantic-ui-react";
import NewGroupItemModal from "./NewGroupItemModal";
import "../../../GroupStyle/Group.scss";

const NewGroupItem = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Card className="group_card, Newgroup_card" raised>
          <Icon name='add circle' className="Newgroup_circle" />
          <Card.Header className="group_Card_header">그룹 만들기</Card.Header>
        </Card>
      }
    >
      <NewGroupItemModal setOpen={setOpen} />
    </Modal>
  );
};

export default React.memo(NewGroupItem);
