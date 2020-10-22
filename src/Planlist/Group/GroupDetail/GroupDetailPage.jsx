import React,{useEffect} from 'react';
import DetailCenterlContainer from './Container/DetailCenterlContainer';
import DetailChattingContainer from './Container/DetailChattingContainer';
import DetailProfileContainer from './Container/DetailProfileContainer';

import { Container, Grid} from "semantic-ui-react";

const GroupDetailPage = ({history}) => {

    useEffect(() => {
        history.push('/groupdetail/all')
    },[])

    const boxShadowRemove ={boxShadow:"none"}
    return (
        <Container>
            <Grid celled style={boxShadowRemove}>
                <Grid.Row style={boxShadowRemove}>
                    <Grid.Column width={4} style={boxShadowRemove}>
                        <DetailProfileContainer />
                    </Grid.Column>
                    

                    <Grid.Column width={8} style={boxShadowRemove}>
                        <DetailCenterlContainer />
                    </Grid.Column>

                    <Grid.Column width={4} style={boxShadowRemove}>
                        <DetailChattingContainer />
                    </Grid.Column>

                </Grid.Row>
            </Grid>
            
        </Container>
    );
};

export default GroupDetailPage;