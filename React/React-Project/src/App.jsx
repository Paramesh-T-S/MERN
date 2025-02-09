function App() {

  return (
    <div> 
      <CardWrapperComponent>
        <TextComponent></TextComponent>
      </CardWrapperComponent>
      <CardWrapperComponent>
        Hi Paramesh
      </CardWrapperComponent>
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
//parent component - inbuilt "children" key is use
function CardWrapperComponent({children}){
  return(
    <div style={{border:"2px solid"}}>
      {children}
    </div>
  )
}

export default App
