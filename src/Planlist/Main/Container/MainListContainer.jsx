import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import exampleDataset from "../../Sample/Data/MainPage_List_Data";
import MainListView from "../View/MainListView";
import MainItemView from "../View/MainItem/MainItemView";

@inject("Store")
@observer
class MainPageContainer extends Component {
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
