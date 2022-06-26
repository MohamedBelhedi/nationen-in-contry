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
// fetch=async(e)=>{
//     // beispiel API
// try{
//     await fetch("https://www.pxweb.bfs.admin.ch/api/v1/it/px-x-0103020300_102/px-x-0103020300_102.px")
//     .then(res=> res.json())
//     .then(result=>{


//       console.log(result.variables[2].valueTexts)
//       // const x=document.createElement("p")

  

//       // x.appendChild(x)
//       const x=document.querySelector(".test")
//       x.innerHTML=result.variables[1].valueTexts+result.variables[2].valueTexts
//       const input=document.querySelector("input").value
// if(e.key==='Enter'){
//       if(input.map(x.textContent)==="Yemen")
      
//       {
//           alert("das ist Jemen")
//       }
//       const input=document.querySelector("input").value
//       const x=document.querySelector(".test")
//       if(input.includes(x.textContent==="Svizzera")){

//           console.log("test")

//       }
// }

//     })
//   }catch{

// console.log("Fehler")

//   }

//   }
  render(){




  

  return (
    <>
    <div className="App">
   <h1>Einwohner Nationalität suchen Schweiz</h1>

   {/* <button onClick={this.fetch}>Start</button> */}
  
   <Accordion defaultActiveKey="0" >
  <Accordion.Item eventKey="0"  className="active1">
    <Accordion.Header ></Accordion.Header>
    <Accordion.Body className="test">
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Welche Nationalitäten Leben Aktuell in der Schweiz</Accordion.Header>
    <Accordion.Body>
    
    {Daten.map(({button,click,button1,button2})=>(

<>
   <div className="d-flex justify-content-center" onClick={click}>
    {button}




   </div>

   <div>

  

   </div>
  
   </>
))}
  <input type="text" onKeyDown={this.fetch} />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
   
    </div>

    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    {Daten.map(({button1,click2})=>(
  <Accordion.Body onClick={click2}>
   
{button1}

<div className="bildApi">


</div>
  </Accordion.Body>


    ))
      
    }
  </Accordion.Item>
</Accordion>

<div>


 
</div>
    </>
  );

}
}
export default App;
