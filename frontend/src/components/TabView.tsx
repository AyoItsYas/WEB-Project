"use client";

import React from "react";

import styles from "./TabView.module.scss";

function Tab(props: { id: any; children: React.ReactNode }) {
  const { id, children } = props;

  return (
    <div id={id} className={styles.Tab}>
      {children}
    </div>
  );
}

function TabSelector(props: { tabIds: string[] }) {
  const { tabIds } = props;

  return (
    <div className={styles.TabSelector}>
      {props.tabIds.map((tabId, i) => (
        <button
          key={i}
          type="button"
          id={`tab-selector-${tabId}`}
          onClick={(e) => TabView.switchTab(e, tabIds, tabId)}
        >
          {tabId}
        </button>
      ))}
    </div>
  );
}

function TabView(props: { tabs: JSX.Element[]; tabIds: string[] }) {
  const { tabs, tabIds } = props;

  return (
    <div
      className={styles.TabView}
      onLoad={(e) => setTimeout(() => switchTab(e, tabIds, tabIds[0]), 5000)}
    >
      <TabSelector tabIds={tabIds} />

      <div className={styles.Tabs}>
        {tabs.map((content, i) => (
          <Tab key={i} id={tabIds[i]}>
            {content}
          </Tab>
        ))}
      </div>
    </div>
  );
}

function switchTab(e: React.SyntheticEvent, tabIds: string[], tabId: string) {
  tabIds.forEach((id) => {
    const tab = document.getElementById(id);
    const TabSelector = document.getElementById(`tab-selector-${id}`);

    if (tab) {
      if (id === tabId) {
        tab.style.display = "block";
        TabSelector?.classList.add(styles.active);
      } else {
        tab.style.display = "none";
        TabSelector?.classList.remove(styles.active);
      }
    }
  });
}

TabView.switchTab = switchTab;

export default TabView;
