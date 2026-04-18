import { Tabs } from "@mantine/core";

const BookingsTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <Tabs
      value={activeTab}
      onChange={onTabChange}
      variant="pills"
      radius="md"
             
    >
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab 
            key={tab.key} 
            value={tab.key}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};

export default BookingsTabs;