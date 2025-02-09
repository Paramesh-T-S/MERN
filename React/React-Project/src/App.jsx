import { useState } from "react"


function App() {
  return (
    <> 
      <HeaderWithButtonComponent></HeaderWithButtonComponent>
      <HeaderComonent headerTitle={"Paramesh Header component2"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
    </>
  )
}

function HeaderWithButtonComponent(){
  const [headerTitle, setHeaderTitle] = useState("paramesh1");

  function updateTitle(){
    setHeaderTitle("Paramesh" + Math.random());
  }

  return(
    <>
    <button onClick={updateTitle}>Click here to change the title</button>
    <HeaderComonent headerTitle={headerTitle}></HeaderComonent> 
    </>
  )
}

//Header component
function HeaderComonent({headerTitle}){
  return(
    <div>{headerTitle}</div>
  )
}

export default App
