import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

 export const Daten=[

{

   button:(<button className="btn btn-primary d-flex justify-content-center">Erfahren</button>),
    click(){

        fetch("https://www.pxweb.bfs.admin.ch/api/v1/it/px-x-0103020300_102/px-x-0103020300_102.px")
        .then(res=> res.json())
        .then(result=>{
    
            const x=document.querySelector(".test")
            x.innerHTML=
            `
            <thead>
            <th>Nationen
            <h6>${result.variables[2].valueTexts}</h6>
            </th>
            </thead>
            `
          console.log(result.variables[2].valueTexts)

       
      
          
          // const x=document.createElement("p")
        })
        const input=document.querySelector("input").value
        
        if(input.includes("Albania")){

            console.log("test")

        }



    }


},
{

    button1:(<button className="btn btn-primary">hi</button>),
    click2(){

        console.log("Hallo2")


    }


},
{
    button2:(<button>Hallo</button>),
    click(){

        console.log("Hallo3")


    }


},
    

 

]
