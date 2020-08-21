import React from 'react';
import './App.css';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Home from './components/home/Home';
import Form from './components/form/Form';
import Stats from './components/stats/Stats';

function App() {
  const [tab, setTab] = React.useState("home");
  const tabChange = ((event, newValue) => {
		setTab(newValue);
  });
  
  return (
    <div className="App">
      <TabContext value={tab}> 
			<TabList onChange={tabChange} TabIndicatorProps={{style: {background:'#787878'}}}>
				<Tab label="Home" value="home"/>
				<Tab label="Form" value="form"/>
				<Tab label="Stats" value="stats"/>
			</TabList>

			<TabPanel value="home" style={{padding: "0px"}}>
				<Home />
			</TabPanel>
			<TabPanel value="form" style={{padding: "0px"}}>
				<Form />
			</TabPanel>
				
			<TabPanel value="stats" style={{padding: "0px", overflow: "auto"}}>
				<Stats />
      </TabPanel>
    </TabContext>
	
    </div>
  );
}

export default App;
