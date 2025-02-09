function App() {

  return (
    <div> 
      <CardWrapperComponent innerComponent={<TextComponent></TextComponent>} ></CardWrapperComponent>
    </div>
  )
}

function TextComponent(){
  return (
    <div>
      Hi Paramesh2
    </div>
  )
}

function CardWrapperComponent({innerComponent}){
  return(
    <div style={{border:"2px solid"}}>
      {innerComponent}
    </div>
  )
}

export default App
