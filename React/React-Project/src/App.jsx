import React from "react";

import { useState } from "react"


function App() {
  const [headerTitle, setHeaderTitle] = useState("paramesh1");

  function updateTitle(){
    setHeaderTitle("Paramesh" + Math.random());
  }

  return (
    <div> 
      <button onClick={updateTitle}>Click here to change the title</button>
      <HeaderComonent headerTitle={headerTitle}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component2"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 

    </div>
  )
}

//Header component
const HeaderComonent = React.memo(function HeaderComonent({headerTitle}){
  return(
    <div>{headerTitle}</div>
  )
})

export default App
