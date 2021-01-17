import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";
import Tabs, { TabType } from "../../shared/Tabs";
import windows from "./windowSchema";
import Window from "./Window";

const StyledWindows = styled.div`
  width: 33rem;
  height: 100%;
  background-color: var(--panel);
  margin-left: 1px;
`;

const Windows = () => {
  return (
    <StyledWindows>
      <Expandable
        open={true}
        right={true}
        toggle={() => FeatureRequest("Windows/Expandable")}
      />
      {windows.map((window: string[]) => {
        const tabs: TabType[] = [];
        window.forEach((label: string) =>
          tabs.push({ label: label, content: <Window window={label} /> })
        );
        return <Tabs tabs={tabs} />;
      })}
    </StyledWindows>
  );
};

export default Windows;
