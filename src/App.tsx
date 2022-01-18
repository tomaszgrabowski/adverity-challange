import axios from "axios";
import Papa from "papaparse";
import React, { FC, useEffect, useReducer, useState } from "react";
import { DataPoint } from "./abstracts/data-point";
import styled from "styled-components";
import { DataReducer, InitialState, Selector } from "./data/DataReducer";
import { Error, Loaded, Loading } from "./data/Actions";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { getData } from "./api/api";

const App: FC = () => {
  const [state, dispatch] = useReducer(DataReducer, InitialState);
  const { campaigns, results, dataSources, loading, error } = Selector(state);

  useEffect(() => {
    dispatch(Loading());
    const get = async () => {
      try {
        const result = await getData();
        const data = Papa.parse<DataPoint>(result.data, { header: true });
        dispatch(Loaded(data.data));
      } catch (e: any) {
        // here we could catch API error and pass in into Error action, but for simplicity i assume that it does not matter.
        dispatch(Error());
      }
    };
    get();
  }, []);

  return (
    <Wrapper>
      {!loading && !error && (
        <>
          <LeftPanel
            dataSources={dataSources}
            campaigns={campaigns}
            dispatch={dispatch}
          />
          <RightPanel results={results} />
        </>
      )}
      {loading && <span>Loading...</span>}
      {error && <span>Error...</span>}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.main`
  display: flex;
  width: 100vw;
  text-align: center;
`;
