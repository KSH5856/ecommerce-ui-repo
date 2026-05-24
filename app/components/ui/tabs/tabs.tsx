"use client";
import { useState } from "react";
import styles from "./tabs.module.css";

export type TabOption = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export const Tabs = ({
  tabs,
  initialActiveId,
}: {
  tabs: TabOption[];
  initialActiveId?: string;
}) => {
  const defaultId = initialActiveId ?? (tabs.length ? tabs[0].id : undefined);
  const [activeId, setActiveId] = useState<string | undefined>(defaultId);

  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div>
      <div className="flex border-b py-2 border-gray-300 gap-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === activeId}
            onClick={() => setActiveId(tab.id)}
            className={`${tab.id !== activeId && styles["inactive-tab"]} py-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles["tab-panel"]}>
        {activeTab && <div>{activeTab.content}</div>}
      </div>
    </div>
  );
};

export default Tabs;
