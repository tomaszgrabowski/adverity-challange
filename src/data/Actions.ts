import { Action } from "../abstracts/action";
import { DataPoint } from "../abstracts/data-point";
import { Option } from "../abstracts/option";

export enum ActionType {
  LOADING = `Data Loading`,
  LOADED = `Data Loaded`,
  ERROR = `Data Error`,
  TOGGLE_CAMPAIGNS = "Toggle Campaigns",
  TOGGLE_DATASOURCES = "Toggle Datasources",
}

export const Loading = (): Action => ({
  type: ActionType.LOADING as ActionType.LOADING,
});

export const Loaded = (data: DataPoint[]): Action => ({
  type: ActionType.LOADED as ActionType.LOADED,
  payload: data,
});

export const Error = (): Action => ({
  type: ActionType.ERROR as ActionType.ERROR,
});

export const ToggleCampaigns = (campaigns: readonly Option[]): Action => {
  return {
    type: ActionType.TOGGLE_CAMPAIGNS as ActionType.TOGGLE_CAMPAIGNS,
    payload: campaigns,
  };
};

export const ToggleDatasources = (dataSources: readonly Option[]): Action => {
  return {
    type: ActionType.TOGGLE_DATASOURCES as ActionType.TOGGLE_DATASOURCES,
    payload: dataSources,
  };
};

export type Actions = ReturnType<
  | typeof Loading
  | typeof Loaded
  | typeof Error
  | typeof ToggleCampaigns
  | typeof ToggleDatasources
>;
