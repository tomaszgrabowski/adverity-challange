import { DataPoint } from "../abstracts/data-point";
import { Option } from "../abstracts/option";
import { Actions, ActionType } from "./Actions";

type AppState = {
  isLoading: boolean;
  isError: boolean;
  data: DataPoint[];
  pickedCampaigns: Option[];
  pickedDatasources: Option[];
  filteredResults: DataPoint[];
};

export const InitialState: AppState = {
  isLoading: false,
  isError: false,
  data: [],
  pickedCampaigns: [],
  pickedDatasources: [],
  filteredResults: [],
};

export const DataReducer = (
  state: AppState = InitialState,
  action: Actions
): AppState => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.ERROR:
      return {
        ...state,
        isError: true,
      };
    case ActionType.LOADED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case ActionType.TOGGLE_DATASOURCES:
      return {
        ...state,
        pickedDatasources: action.payload,
      };
    case ActionType.TOGGLE_CAMPAIGNS:
      return {
        ...state,
        pickedCampaigns: action.payload,
      };

    default:
      return state;
  }
};

export const Selector = (state: AppState) => {
  const dataSources = Array.from(
    new Set(state.data.map((item) => item.Datasource))
  ).map((item) => ({
    value: item,
    label: item,
  }));

  const campaigns = Array.from(
    new Set(state.data.map((item) => item.Campaign))
  ).map((item) => ({
    value: item,
    label: item,
  }));
  const results = state.data
    .filter((item) =>
      state.pickedCampaigns.map((item) => item.value).includes(item.Campaign)
    )
    .filter((item) =>
      state.pickedDatasources
        .map((item) => item.value)
        .includes(item.Datasource)
    );

  return {
    dataSources,
    campaigns,
    results,
    loading: state.isLoading,
    error: state.isError,
  };
};
