import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {usaDT} from './usa'
import De from './deutschland.json'
 



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
            active.style.transform = "zIndex(100000px)"
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

    button1:(<button className="btn btn-primary">fetch</button>),
    click2(){
        
//       fetch('https://dummyjson.com/products/1')
//       .then(res=>res.json())
//       .then(result=>{
        
//         console.log(result.brand+result.images[0])

//         const bildApi=document.querySelector('.bildApi')
// const pic = document.createElement("IMG");
// const btn=document.createElement("button")
// btn.setAttribute("text","x")
// pic.setAttribute("src",result.images[0]);
// pic.setAttribute("width", "500");
// pic.setAttribute("height", "600");

// bildApi.appendChild(pic);
// bildApi.appendChild(btn);
// btn.addEventListener("click",()=>{

// bildApi.remove()


// })

fetch('http://api.open-notify.org/astros.json')
.then(res=> res.json())
.then(results=>{
  // for(var i; results.people[0].name.length>i ; i++){
  const bildApi=document.querySelector(".bildApi")   //keine kust 😁 neue element zu erstellen

  // bitte eine Suchbox machen und mit if(input.includes(namex))....
  const randomNum=Math.floor((Math.random()* 10) + 1)

  bildApi.innerText=(results.people[randomNum].name)

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
    button2:(<button>Hallo</button>),
    click3(){

      fetch('https://api.nutritionix.com/v1_1/search')
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

        console.log("Fehler im System bitte nach den Fehler in der Console suchen",err)


      })

console.log("geht")
    }


},
    

 

]
