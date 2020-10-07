import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import MainListView from "../View/MainListView";
import MainItemView from "../View/MainItemView";

@inject("Store")
@observer
class MainPageContainer extends Component {
  componentDidMount() {
    // 스크롤링 이벤트 추가
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // 언마운트 될때에, 스크롤링 이벤트 제거
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    // IE에서는 document.documentElement 를 사용.
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
    if (scrollHeight - innerHeight - scrollTop < 100) {
      console.log("Almost Bottom Of This Browser");
    }
  };

  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    const test_arr = ["*", "*", "*", "*", "*"];
    const dataset = exampleDataset;
    const exampleItemComponent_1 = test_arr.map((_, index) => (
      <MainItemView
        key={index}
        item={dataset[this.getRandomIntInclusive(0, 99)]}
      />
    ));
    const exampleItemComponent_2 = test_arr.map((_, index) => (
      <MainItemView
        key={index}
        item={dataset[this.getRandomIntInclusive(0, 99)]}
      />
    ));
    const exampleItemComponent_3 = test_arr.map((_, index) => (
      <MainItemView
        key={index}
        item={dataset[this.getRandomIntInclusive(0, 99)]}
      />
    ));
    const exampleItemComponent_4 = test_arr.map((_, index) => (
      <MainItemView
        key={index}
        item={dataset[this.getRandomIntInclusive(0, 99)]}
      />
    ));

    return (
      <MainListView
        exampleItemComponent_1={exampleItemComponent_1}
        exampleItemComponent_2={exampleItemComponent_2}
        exampleItemComponent_3={exampleItemComponent_3}
        exampleItemComponent_4={exampleItemComponent_4}
      />
    );
  }
}

export default MainPageContainer;
