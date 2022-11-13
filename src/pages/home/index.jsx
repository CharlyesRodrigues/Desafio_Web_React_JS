



import './style.css'; /* como já estamos dentro da página home 
importamos dessa forma*/

import { Linguagem } from "../../components/Linguagem/index"



export function Home(teste) {

  const lista1 = ["JavaScript","React","Vue Js", "Tailwind CSS"];
  const coluna1 = lista1.map(

(a)=> <ul><li>{a}</li></ul>

  )
  const lista2 = ["Styled Components", "Saas", "Node", "TypeScript"];
  const coluna2 = lista2.map(

(b)=> <ul><li>{b}</li></ul>

  )
  const lista3 = ["Angular", "Java"];
  const coluna3 = lista3.map(

(c)=> <ul><li>{c}</li></ul>

  )
  
   
    return (
     <div className="apresentacao">
          <h1>Olá, meu nome é Charlyes Souza Rodrigues e eu sou desenvolvedor Front-end,
            Tecnologias que tenho experiências:
          </h1>
               <div className='background-logo' > </div>
               <img className='logo' src='src\img\logo.png'></img>
              
            <div className='Lista'> </div>
            
            <div className='div1'>{coluna1}</div> 
            <div className='div2'>{coluna2}</div> 
            <div className='div3'>{coluna3}</div> 
              
               <Linguagem />   
               
     </div>
     
    )
  }
