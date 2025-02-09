function App() {

  return (
    <div> 
      <CardWrapperComponent innerComponent={<TextComponent></TextComponent>} ></CardWrapperComponent>
    </div>
  )
}
//child component
function TextComponent(){
  return (
    <div>
      Hi Paramesh2
    </div>
  )
}
//parent component
function CardWrapperComponent({innerComponent}){
  return(
    <div style={{border:"2px solid"}}>
      {innerComponent}
    </div>
  )
}

export default App
