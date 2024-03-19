import React from "react";
import Mainmain from "./components/Main/Mainmain"
import "aos/dist/aos.css";

// import Signin from './components/Signin';

import {Routes, Route} from "react-router-dom";

const App = () => {


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
     
      <Routes>
        <Route path="/" element={<Mainmain/>}/>
        {/* <Route path="/SignUp" element={<Signin/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
