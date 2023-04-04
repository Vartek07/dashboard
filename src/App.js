import React from 'react';
import { useState } from "react";
import { ColorModeContext, useMode } from './Scenes/Global/theme';
import { CssBaseline , ThemeProvider } from "@mui/material";
import { Routes ,Route } from "react-router-dom" ; 
import TopBar from './Scenes/Global/TopBar';
import Sidebar from './Scenes/Global/SideBar';
import Dashboard from './Scenes/Dashboard';
import Team from "./Scenes/Team";
import Calendar from './Scenes/Calendar';
import Bar from './Scenes/Bar';
// import Invoices from "./Scenes/invoices";
// import Contacts from "./Scenes/contacts";

// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import FAQ from "./Scenes/faq";
// import Geography from "./Scenes/geography";



function App() {
  const [theme , colorMode] =useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return ( 
  <ColorModeContext.Provider value= {colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app" >
       <Sidebar isSidebar={isSidebar} />
       <main classeName="app">
          <TopBar setIsSidebar={setIsSidebar} />
          <Routes>
          <Route path ="/" element={<Dashboard/>} />
          <Route path ="/team" element={<Team/>} />
          <Route path ="/Calendar" element={<Calendar/>} />
          <Route path ="/Bar" element={<Bar/>} />
          {/* <Route path ="/contacts" element={<Contact/>} /> */}
          {/* <Route path ="/invoices" element={<Invoices/>} /> */}
          {/* <Route path ="/form" element={<From/>} /> */}
          {/* <Route path ="/pie" element={<Pie/>} /> */}
          {/* <Route path ="/line" element={<Line/>} /> */}
          {/* <Route path ="/faq" element={<FAQ/>} /> */}
          {/* <Route path ="/geography" element={<Geography/>} /> */}
          </Routes> 
        </main>
      </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );

};

export default App;
