function App() {

  return (
    <> 
      <HeaderComonent headerTitle={"Paramesh Header component1"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component2"}></HeaderComonent> 
      <HeaderComonent headerTitle={"Paramesh Header component3"}></HeaderComonent> 
    </>
  )
}

function HeaderComonent({headerTitle}){
  return(
    <div>{headerTitle}</div>
  )
}

export default App
