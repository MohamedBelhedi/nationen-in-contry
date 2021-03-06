import './App.css';
import {Component} from 'react'
import { Card,Accordion } from 'react-bootstrap';
import { Daten } from './daten';
import 'bootstrap/dist/css/bootstrap.min.css';






class App extends Component{
  constructor(props){
    super(props)

  }

//funktion ist Blind  
fetch=async(e)=>{
    // beispiel API
try{
    await fetch("https://www.pxweb.bfs.admin.ch/api/v1/de/px-x-0103020300_102/px-x-0103020300_102.px")
    .then(res=> res.json())
    .then(result=>{


      console.log(result.variables[2].valueTexts)
      // const x=document.createElement("p")

  

      // x.appendChild(x)
      const x=document.querySelector(".test")
      x.innerHTML=result.variables[1].valueTexts+result.variables[2].valueTexts
      
if(e.key==='Enter'){
  const input=document.querySelector("input").value
          if(input.includes(["Albanien"])===result.variables[2].valueTexts[2]){
            
      
      
          alert("das ist Jemen")
      
      // const input=document.querySelector("input").value
      // const x=document.querySelector(".test")
      // if(input.includes(x.textContent==="Svizzera")){

      //     console.log("test")

      // }
}}

    }).catch(err=>{

  
      err.status(400).json("kannst nicht rein")

    })
  }catch{

console.log("Fehler")

  }



  }
  input_ext=(e)=>{
    if(e.key==='Enter'){
    const ISS_Input=document.querySelector(".ISS_Input").value
    const bildApi=document.querySelector(".bildApi").textContent
    // const bildApi_ext=bildApi.textContent
    
    if(bildApi.includes(ISS_Input))
    {
      console.log(ISS_Input,"this is",bildApi)
      }
  
    }
  
  }
  render(){




  

  return (
    <>
    <div className="App">
   <h1>Mixed API Calls</h1>

   {/* <button onClick={this.fetch}>Start</button> */}
  
   <Accordion defaultActiveKey="0" >
  <Accordion.Item eventKey="0"  className="active1">
    <Accordion.Header ></Accordion.Header>
    <Accordion.Body className="test">
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Welche Nationalit??ten Leben Aktuell in der Schweiz</Accordion.Header>
    <Accordion.Body>
    
    {Daten.map(({button,click})=>(

<>
   <div className="d-flex justify-content-center" onClick={click}>
    {button}




   </div>

   <div>

  

   </div>
  
   </>
))}
  <input className="inputTest" type="text" onKeyDown={this.fetch} />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
   
    </div>

    <Accordion>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Api Call ISS Population</Accordion.Header>
    {Daten.map(({button1,click2})=>(
  <Accordion.Body onClick={click2}>
   
{button1}

<div className="bildApi">


</div>

  </Accordion.Body>


    ))
      
    }
    <input className='ISS_Input' type="text"  onKeyDown={this.input_ext}/>
  </Accordion.Item>
</Accordion>
    <Accordion>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Nutriscore Api Call Random Food</Accordion.Header>
 

    {Daten.map(({button2,click3,input2})=>(
  <Accordion.Body onClick={click3}>
    <div className="input">

{/* {input2} */}
 
</div>
   <div className="button2">
   {button2}

   </div>

<div className="foodApi">


</div>

  </Accordion.Body>


    ))
      
    }
  </Accordion.Item>
</Accordion>


<input className='foodInput' type={"text"} placeholder="search for Food" />



    </>
  );

}
}
export default App;
