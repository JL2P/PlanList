import React from "react";
import _ from "lodash";
import { Search } from "semantic-ui-react";
import "../style/Search.scss";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const HeaderSearch = ({ accounts }) => {
  function source() {
    let test = accounts.map((val) => {
      return {
        title: val.accountId,
        description: val.email,
        image:
          val.galleries.length > 0 ? val.galleries[0].filePath : val.imgUrl,
      };
    });

    return test;
  }

  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");

      dispatch({
        type: "FINISH_SEARCH",
        results: source()
          .slice()
          .filter((val) => {
            return re.test(val.title);
          }),
      });
    }, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  //검색 후 이동
  const onMove = (accoutId) => {
    window.location.replace(`/account/${accoutId}`);
  };

  return (
    <Search
      style={{ height: "3.2em" }}
      loading={loading}
      onResultSelect={(e, data) => {
        onMove(data.result.title);
        dispatch({ type: "UPDATE_SELECTION", selection: data.result.title });
      }}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
      className="search"
      placeholder="아이디를 검색해주세요."
    />
  );
};

export default HeaderSearch;
