import Select from "react-select";
import React, { FC } from "react";
import { Option } from "./abstracts/option";
import styled from "styled-components";
import { ToggleCampaigns, ToggleDatasources } from "./data/Actions";
import { Action } from "./abstracts/action";

export type LeftPanelProps = {
  dataSources: Option[];
  campaigns: Option[];
  dispatch: (action: Action) => void;
};

const LeftPanel: FC<LeftPanelProps> = ({
  campaigns,
  dataSources,
  dispatch,
}) => {
  const pickCampaign = (campaigns: readonly Option[]) => {
    dispatch(ToggleCampaigns(campaigns));
  };
  const pickDatasource = (dataSources: readonly Option[]) => {
    dispatch(ToggleDatasources(dataSources));
  };
  return (
    <Wrapper data-testid="left-panel">
      <h1>Adverity Coding Challenge</h1>
      {dataSources.length > 0 && (
        <Select
          data-testid="datasource-dropdown"
          closeMenuOnSelect={false}
          isMulti
          options={dataSources}
          onChange={(value) => pickDatasource(value)}
          placeholder={"Select data source"}
        />
      )}
      {campaigns.length > 0 && (
        <Select
          data-testid="campaign-dropdown"
          closeMenuOnSelect={false}
          isMulti
          options={campaigns}
          onChange={(value) => pickCampaign(value)}
          placeholder={"Select campaigns"}
        />
      )}
    </Wrapper>
  );
};

export default LeftPanel;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1;
  gap: 20px;
`;
