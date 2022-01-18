import { render, screen } from "@testing-library/react";
import App from "./App";
import * as ReducerMock from "./data/DataReducer";

describe("App", () => {
  let selector: jest.SpyInstance;
  beforeEach(() => {
    selector = jest.spyOn(ReducerMock, "Selector").mockReturnValue({
      campaigns: [{ label: "a", value: "a" }],
      loading: false,
      error: false,
      dataSources: [{ label: "a", value: "a" }],
      results: [
        {
          Datasource: "test",
          Campaign: "test",
          Impressions: 23,
          Clicks: 23,
          Date: "2020-01-01T20:20:20",
        },
      ],
    });
  });
  afterEach(() => selector.mockRestore());

  it("should contain left panel", () => {
    render(<App />);
    expect(screen.getByTestId("left-panel")).toBeInTheDocument();
  });
  it("should contain right panel", () => {
    render(<App />);
    expect(screen.getByTestId("right-panel")).toBeInTheDocument();
  });
  describe("when error", () => {
    beforeEach(() => {
      selector = jest.spyOn(ReducerMock, "Selector").mockReturnValue({
        campaigns: [],
        loading: false,
        error: true,
        dataSources: [],
        results: [],
      });
    });
    afterEach(() => selector.mockRestore());

    it("should display error indicator", () => {
      render(<App />);
      expect(screen.getByText("Error...")).toBeInTheDocument();
    });
  });
  describe("when loading", () => {
    beforeEach(() => {
      selector = jest.spyOn(ReducerMock, "Selector").mockReturnValue({
        campaigns: [],
        loading: true,
        error: false,
        dataSources: [],
        results: [],
      });
    });
    afterEach(() => selector.mockRestore());
    it("should display loading indicator", () => {
      render(<App />);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
