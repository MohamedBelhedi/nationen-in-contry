import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import De from './deutschland.json'
 



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
            const active=document.querySelector(".active1")
            active.style.background="red"
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
        
      fetch('https://dummyjson.com/products/1')
      .then(res=>res.json())
      .then(result=>{
        
        console.log(result.brand+result.images[0])

        const bildApi=document.querySelector('.bildApi')
const pic = document.createElement("IMG");
const btn=document.createElement("button")
btn.setAttribute("text","x")
pic.setAttribute("src",result.images[0]);
pic.setAttribute("width", "500");
pic.setAttribute("height", "600");

bildApi.appendChild(pic);
bildApi.appendChild(btn);
btn.addEventListener("click",()=>{

pic.remove(btn)
btn.style.display="none"

})







      }).catch(err=>{

        console.log("Fehler",err)

      })

    }


},
{
    button2:(<button>Hallo</button>),
    click(){

        console.log("Hallo3")


    }


},
    

 

]
