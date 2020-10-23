import React from 'react';
import { Card ,Image, Grid, Modal,Button, Header } from "semantic-ui-react";
import DetailGroupAllListModal from "./DetailGroupAllListModal";
import '../../../GroupStyle/Group.scss';

const DetailGroupAllList = ({item}) => {
    const [open, setOpen] = React.useState(false)

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
                        <Card.Header className="group_Card_header">{item.title}</Card.Header>
                        <Card.Description>참여한 멤버 수 : {item.rating}명</Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            }
        >
            <DetailGroupAllListModal setOpen={setOpen} item={item} />
        </Modal>
    );
};

export default React.memo(DetailGroupAllList);