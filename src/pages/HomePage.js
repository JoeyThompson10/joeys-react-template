import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function HomePage() {
  return (
    <div className="home-page">
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
        </TabList>

        <TabPanel>
          <h2>Content for Tab 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomePage;
