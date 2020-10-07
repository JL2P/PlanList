import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//시멘틱 UI 적용
import "semantic-ui-css/semantic.min.css";
//라우터 적용
import { BrowserRouter } from "react-router-dom";
//mobx Store적용
import { Provider } from "mobx-react";
import TodoStore from "./Planlist/MainPages/Store/TodoStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider Store={TodoStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
