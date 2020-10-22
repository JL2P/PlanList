import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ')

const DetailChattingView = () => {
    return (
        <Card>
            <Card.Content header='채팅 시스템 준비중' />
            <Card.Content description={description} />
        </Card>
    );
};

export default DetailChattingView;