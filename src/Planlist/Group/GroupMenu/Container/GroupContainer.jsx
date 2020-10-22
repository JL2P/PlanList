import React, { Component } from 'react';
import MyGroupView from '../View/MyGroupView';
import BestGroupView from '../View/BestGroupView';
import CategoryGroupView from '../View/CategoryGroupView';
import RecommendGroupView from '../View/RecommendGroupView';
import { inject, observer } from "mobx-react";


@inject("Store")
@observer
class GroupContainer extends Component {

    render() {
        const { group } = this.props.Store;
        const my_sampleData = group.getMyTodo;
        const best_sampleData = group.getBestTodo;
        const category_sampleData = group.getCategoryTodo;
        const recommend_sampleData= group.getRecommendTodo;
        
        return (
            <div>
                <MyGroupView sampleData={my_sampleData}/>
                <BestGroupView sampleData={best_sampleData} />
                <CategoryGroupView sampleData={category_sampleData} />
                <RecommendGroupView sampleData={recommend_sampleData} />
            </div>
        );
    }
}

export default GroupContainer;