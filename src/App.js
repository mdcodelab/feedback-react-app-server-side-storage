import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//components
import Header from "./components/Header"
import Form from "./components/Form";
import FeedbackList from "./components/FeedbackList";
import AboutLink from "./components/AboutLink"
//pages
import About from "./pages/About";
//context
import { useGlobalContext,AppProvider} from './context';



function App() {

  return (
    <AppProvider>
      <Router>
      <div className="container">
          <Header></Header>
          <Routes>
              <Route path="/" element={<>
                <Form></Form> 
                <FeedbackList> </FeedbackList>
              </>}></Route>  
              <Route path="/about" element={<About></About>}></Route>          
          </Routes>
        <AboutLink></AboutLink>
    </div>
    </Router>
    </AppProvider>
  );
}

export default App;
