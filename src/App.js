//this is a component it holds all logi and stylinh in one file
//this is a self contained piece of code containing html, js, and css

//to render a react component make sure you always start its name with an uppercase

import React from 'react'; 
import Nav from './Nav';
import Home from './Home';
import SECTION_1 from './section_1';
import SECTION_2 from './section_2';
import SECTION_3 from './section_3';
import SECTION_4 from './section_4';


function App(){
  return(
    <>
      <Nav />
      <Home />
      <SECTION_1 />
      <SECTION_2 />
      <SECTION_3 />
      <SECTION_4 />
    </>
  );
}

export default App;