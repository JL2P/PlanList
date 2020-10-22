import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import DetailChattingView from '../View/DetailChattingView';

@inject("Store")
@observer
class DetailChattingContainer extends Component {
    render() {
        return (
            <div>
                <DetailChattingView />
            </div>
        );
    }
}

export default DetailChattingContainer;