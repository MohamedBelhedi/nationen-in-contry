import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {usaDT} from './usa'
import De from './deutschland.json'
 



 export const Daten=[

{

   button:(<button className="btn btn-primary d-flex justify-content-center">Erfahren</button>),
    click(e){

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
            active.style.transform = "zIndex(100000px)"
          console.log(result.variables[2].valueTexts)
          const input=document.querySelector("input").value
// weiter versuchen über input
          if("Albania"===result.variables[2].valueTexts[2]){

            console.log("test")

        }
      
          
          // const x=document.createElement("p")
        })
        const input=document.querySelector("input").value
        
if(e.key==="Enter"){
        if(input.includes("Albania")){

            console.log("test")

        }
      }


    }


},
{

    button1:(<button className="btn btn-primary">fetch</button>),
    click2(){
        


fetch('http://api.open-notify.org/astros.json')
.then(res=> res.json())
.then(results=>{
  // for(var i; results.people[0].name.length>i ; i++){
  const bildApi=document.querySelector(".bildApi")   //keine kust 😁 neue element zu erstellen

  // bitte eine Suchbox machen und mit if(input.includes(namex))....
  const randomNum=Math.floor((Math.random()* 9) + 1) // die random function für ein zahl zw. 1 udn 9

  bildApi.innerText=(results.people[randomNum].name+'  '+results.people[randomNum].craft)

  console.log(results.people)
  // }
  console.log(results.people)

  

}).catch(err=>{

console.log("Fehler",err)


})
}
 

    // sicherheitsklammern falls es nicht klappt })}


},
{
  /* man soll immer die button etc. in einem objec abspeichern um zu vermeiden das die wenn sie einmal
  in der map function ausgerufen werden micht für die gesammten obejcts nochmal ausgerufen werden.
  */
    button2:(<button className="btn btn-warning">Random Food</button>),
    // input2:(<input className='foodInput' type={"text"} placeholder="search for Food" />)
    // ,
    async click3(){

     
      const foodInput=document.querySelector(".foodInput").value
     
     console.log(foodInput)
     await fetch(`https://api.nutritionix.com/v1_1/search/${foodInput}`)
      .then(res=>res.json())
      .then(results=>{

        const foodApi=document.querySelector(".foodApi")
        foodApi.innerText=results.hits[0].fields.item_name
        +' '
        +
        results.hits[0].fields.brand_name
        +
        '  Nutri Score   '
        +
        results.hits[0]._score 
        
        if(results.hits[0]._score<5){
          alert("Unhealthy")
        }
        else{

          alert("healthy")

        }
      
        console.log(results.hits[0].fields.item_name,"geht")


      }).catch(err=>{

        console.log("Fehler im System bitte nach den Fehler in der Console suchen",err,alert("gibt es nicht"))


      })
  
console.log("geht")
    }


},
    

 

]
