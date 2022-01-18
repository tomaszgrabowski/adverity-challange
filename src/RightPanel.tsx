import React, { FC } from "react";
import { Label, Line, LineChart, XAxis, YAxis } from "recharts";
import { Option } from "./abstracts/option";
import styled from "styled-components";
import { DataPoint } from "./abstracts/data-point";

export type RightPanelProps = {
  results: DataPoint[];
};

const RightPanel: FC<RightPanelProps> = ({ results }) => {
  return (
    <Wrapper data-testid="right-panel">
      {results.length > 0 && (
        <div data-testid="chart">
          <LineChart
            width={900}
            height={400}
            data={results}
            margin={{ bottom: 100, top: 100 }}
          >
            <XAxis dataKey="Date" textAnchor="Date" angle={90} />

            <YAxis
              dataKey="Clicks"
              yAxisId="0"
              type="number"
              orientation="left"
              interval={100000}
              domain={[0, Math.max(...results.map((item) => item.Clicks))]}
            >
              <Label value="Clicks" angle={-90} />
            </YAxis>

            <YAxis
              dataKey="Impressions"
              yAxisId="1"
              type="number"
              orientation="right"
              interval={100000}
              domain={[0, Math.max(...results.map((item) => item.Impressions))]}
            >
              <Label value="Impressions" angle={-90} />
            </YAxis>

            <Line
              type="monotone"
              dataKey="Clicks"
              stroke="red"
              yAxisId="0"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Impressions"
              stroke="blue"
              yAxisId="1"
              dot={false}
            />
          </LineChart>
        </div>
      )}
    </Wrapper>
  );
};

export default RightPanel;

const Wrapper = styled.section`
  display: flex;
  flex: 2;
  padding-right: 20px;
`;
