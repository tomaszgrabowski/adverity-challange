import React from "react";
import { render, screen } from "@testing-library/react";
import LeftPanel, { LeftPanelProps } from "./LeftPanel";

describe("LeftPanel", () => {
  let testObject: LeftPanelProps;

  beforeEach(() => {
    testObject = {
      dataSources: [{ label: "a", value: "a" }],
      campaigns: [{ label: "a", value: "a" }],
      dispatch: jest.fn(),
    };
  });

  it("should contain header", () => {
    render(<LeftPanel {...testObject} />);
    screen.getByText("Adverity Coding Challenge");
  });

  describe("when no datasources", () => {
    it("should not contain datasources dropdown", () => {
      testObject.dataSources = [];
      render(<LeftPanel {...testObject} />);
      const dropdown = screen.queryByText("Select data source");
      expect(dropdown).not.toBeInTheDocument();
    });
  });
  describe("when datasources exists", () => {
    it("should contain datasources dropdown", () => {
      render(<LeftPanel {...testObject} />);
      screen.getByText("Select data source");
    });
  });

  describe("when no campaigns", () => {
    it("should not contain camaigns dropdown", () => {
      testObject.campaigns = [];
      render(<LeftPanel {...testObject} />);
      const dropdown = screen.queryByText("Select campaigns");
      expect(dropdown).not.toBeInTheDocument();
    });
  });
  describe("when campaigns exists", () => {
    it("should contain campaigns dropdown", () => {
      render(<LeftPanel {...testObject} />);
      expect(screen.getByText("Select campaigns")).toBeInTheDocument();
    });
  });
});
