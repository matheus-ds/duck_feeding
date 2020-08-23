import React from 'react';
import './App.css';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Card from '@material-ui/core/Card';

import Home from './components/home/Home';
import Form from './components/form/Form';
import Stats from './components/stats/Stats';

function App() {
  const [formData, setFormData] = React.useState({});
  const [tab, setTab] = React.useState("home");
  const tabChange = ((event, newValue) => {
		setTab(newValue);
  });

  const goToForm = () => {
    setTab("form");
  }
  const saveForm = (data) => {
    setFormData(data);
  }
  
  return (
    <div className="App">
      <TabContext value={tab}> 
      <Card elevation={2}>
        <TabList onChange={tabChange} TabIndicatorProps={{style: {background:'rgb(63 81 181)'}}}>
          <Tab label="Home" value="home"/>
          <Tab label="Form" value="form"/>
          <Tab label="Stats" value="stats"/>
        </TabList>
        </Card>

			<TabPanel value="home" style={{padding: "0px"}}>
				<Home goToForm={goToForm} />
			</TabPanel>
			<TabPanel value="form" style={{padding: "0px"}}>
				<Form saveForm={saveForm} data={formData}/>
			</TabPanel>
				
			<TabPanel value="stats" style={{padding: "0px", overflow: "auto"}}>
				<Stats />
      </TabPanel>
    </TabContext>
	
    </div>
  );
}

export default App;
