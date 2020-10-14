import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import MainListView from "../View/MainListView";
import MainItemGroupView from "../View/MainItem/MainItemGroupView";
import MainItemView from "../View/MainItem/MainItemView";

@inject("Store")
@observer
class MainPageContainer extends Component {
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  divisonToItemGroup = (MainItemViewList, n) => {
    const temp = [];
    for (var i = 0; i < MainItemViewList.length; i++) {
      temp.push(
        <MainItemGroupView key={i} items={MainItemViewList.splice(0, n)} />
      );
    }
    return temp;
  };

  render() {
    //메인화면 조회되는 Card 컬럼 수
    const COLUMN_COUNT = 3;
    //테스트용 데이터
    const dataset = exampleDataset;
    const test_arr = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];

    //데이터를 이용하여 메인 아이템 리스트 생성
    const MainItemViewList = test_arr.map((_, index) => (
      <MainItemView
        key={index}
        item={dataset[this.getRandomIntInclusive(0, 99)]}
      />
    ));

    //메인 아이템 리스트를 각 화면 커럼에 순서대로 배치
    const MainItemGroupListView = this.divisonToItemGroup(
      MainItemViewList,
      COLUMN_COUNT
    );

    return <MainListView itemList={MainItemGroupListView} />;
  }
}

export default MainPageContainer;
