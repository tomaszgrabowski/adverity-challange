import React from "react";
import { render, screen } from "@testing-library/react";
import LeftPanel from "./LeftPanel";
import RightPanel, { RightPanelProps } from "./RightPanel";

describe("LeftPanel", () => {
  let testObject: RightPanelProps;

  beforeEach(() => {
    testObject = {
      results: [
        {
          Datasource: "test",
          Campaign: "test",
          Impressions: 23,
          Clicks: 23,
          Date: "2020-01-01T20:20:20",
        },
      ],
    };
  });

  describe("when no data", () => {
    it("should not contain datasources dropdown", () => {
      testObject.results = [];
      render(<RightPanel {...testObject} />);
      expect(screen.queryByTestId("chart")).not.toBeInTheDocument();
    });
  });
  describe("when data exists", () => {
    it("should contain datasources dropdown", () => {
      render(<RightPanel {...testObject} />);
      expect(screen.getByTestId("chart")).toBeInTheDocument();
    });
  });
});
